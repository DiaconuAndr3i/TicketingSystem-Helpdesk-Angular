import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  optionsAfterLogin: boolean = false;
  optionsAdmin: boolean = false;
  roles: any[] = [];

  constructor(private authService: AuthentificationService) { }

  ngOnInit(): void {
    if (this.authService.isLoggedin()){
        this.optionsAfterLogin = true;
        this.authService.getRolesToken().subscribe(roles => this.roles = roles); 
        if (this.roles.includes('Administrator'))
          this.optionsAdmin = true;
      } 
  }

}
