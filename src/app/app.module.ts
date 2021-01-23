import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const firebaseConfig = {
  apiKey: 'AIzaSyAarKTgvQj2eMH7YnxO0yRaIIouF0eR5ls',
  authDomain: 'gaa-app-c0be7.firebaseapp.com',
  databaseURL: 'https://gaa-app-c0be7.firebaseio.com',
  projectId: 'gaa-app-c0be7',
  storageBucket: 'gaa-app-c0be7.appspot.com',
  messagingSenderId: '137154419494',
  appId: '1:137154419494:web:8fb4b90790f28b6bd8bfe7',
  measurementId: 'G-0BEVCCHW5V'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
