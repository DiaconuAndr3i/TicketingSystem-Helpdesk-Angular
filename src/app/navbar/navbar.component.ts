import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  firstName?: string;
  lastName?: string;
  contentShow: string = 'login';

  constructor(private authService: AuthentificationService, 
    private route: ActivatedRoute) {
     }

  ngOnInit(): void {
    if (this.authService.isLoggedin()){
        this.optionsAfterLogin = true;
        this.authService.getRolesToken().subscribe(roles => this.roles = roles);
        this.myInstitName = String(this.route.snapshot.paramMap.get('myInstitName')); 
        this.firstName = String(this.route.snapshot.paramMap.get('firstName'));
        this.lastName = String(this.route.snapshot.paramMap.get('lastName'));
        if (this.roles.includes('Administrator'))
          this.optionsAdmin = true;
      } 
  }

  showContent(contentShow: string){
    /*this.contentShow = contentShow;
    this.showComp.contentInformationsMethod(this.contentShow);*/
  }

}
