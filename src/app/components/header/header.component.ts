import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
