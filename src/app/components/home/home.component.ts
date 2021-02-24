import { Component, OnInit } from '@angular/core';
import { PointsServiceService } from 'src/app/shared/services/points-service.service';
import { AuthService } from '../../shared/services/auth.service';
import { Table } from '../../shared/services/table';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pointsList: Table[]
  message: string;

  constructor(public authService: AuthService, public pointsSerice: PointsServiceService, public afAuth: AngularFireAuth) { }

  isLoggedIn;

  todayString : Date = new Date();

  ngOnInit(): void {
    this.checkIsLoggedIN();

    let activeUser = JSON.parse(localStorage.getItem(`user`))
    this.authService.findUserAdmin(activeUser.uid);

    this.pointsSerice.getTable().subscribe({
      next: (value: Table[]) => this.pointsList = value,
      complete: () => console.log(this.pointsList),
      error: (message) => this.message = message  
    });

    
  }

  checkIsLoggedIN() {
    return this.isLoggedIn = this.authService.isLoggedIn;
  }

}
