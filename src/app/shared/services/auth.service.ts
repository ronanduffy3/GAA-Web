import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  role:any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.checkRoleByEmail(user["email"], function(res) {
           this.role = res.role;
           this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          localStorage.setItem('role', this.role);

        }.bind(this))

        // JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
   }

   SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {

        this.checkRoleByEmail(result.user["email"], function(response) {
          localStorage.setItem('role', response.role);

          alert(JSON.stringify(response));

        })

         this.ngZone.run(() => {
            this.router.navigate(['dashboard']);
          });
       
      }).catch((error) => {
        window.alert(error.message)
      })
  }


  getCurrentUser() {
    return this.afAuth.currentUser;
  }


  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SetUserData(result.user);
        this.SendVerificationMail();

      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    (await this.afAuth.currentUser).sendEmailVerification().then(() => {
      console.log('Email Sent');
      this.router.navigate(['send-verification-email']);
    });
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error);
    });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  get isTeacher(): boolean {
    const role = localStorage.getItem('role');
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false && role=="Teacher") ? true : false;
  }

  // Sign in with Google

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
        this.SetUserData(result.user);
        });
        this.router.navigate(['dashboard']);
    }).catch((error) => {
      window.alert(error);
    });
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      isStudent: 1
    }

    return userRef.set(userData, {
      merge: true
    });
  }


async UpdateProfile(changedDisplayName: string) {
    const profile = {
        displayName: changedDisplayName
    }
    return (await this.afAuth.currentUser).updateProfile(profile);
}

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
 
  checkRoleByEmail(userEmail, callback) {
    return new Promise(function(reject, resolve) {
       var roleResponse =  this.afs.collection('Users', ref => ref.where('email', '==', userEmail)).valueChanges();
       roleResponse.subscribe(response => {
          if(response[0]['isStudent'] ===1 && response[0]["isTeacher"] == undefined) {
           callback({role:'Student'})
          }

          if(response[0]['isTeacher']===1 && response[0]["isStudent"]== undefined) {
             callback({role:'Teacher'})
          }


       })
    }.bind(this));

  }

}