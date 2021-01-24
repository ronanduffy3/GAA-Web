import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  isLoggedIn;

  ngOnInit(): void {
    this.checkIsLoggedIN();
    console.log(this.isLoggedIn);
  }

  checkIsLoggedIN() {
    return this.isLoggedIn = this.authService.isLoggedIn;
  }

}
