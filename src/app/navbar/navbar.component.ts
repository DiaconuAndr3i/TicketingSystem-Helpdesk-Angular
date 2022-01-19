import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  optionsAfterLogin: boolean = false;

  constructor(private authService: AuthentificationService) { }

  ngOnInit(): void {
    if (this.authService.isLoggedin())
      this.optionsAfterLogin = true;
  }

}
