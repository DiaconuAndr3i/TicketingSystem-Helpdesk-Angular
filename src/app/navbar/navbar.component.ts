import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  myInstitName?: string;

  constructor(private authService: AuthentificationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.authService.isLoggedin()){
        this.optionsAfterLogin = true;
        this.authService.getRolesToken().subscribe(roles => this.roles = roles);
        this.myInstitName = String(this.route.snapshot.paramMap.get('myInstitName')); 
        if (this.roles.includes('Administrator'))
          this.optionsAdmin = true;
      } 
  }

}
