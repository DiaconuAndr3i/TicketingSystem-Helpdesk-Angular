import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, withLatestFrom } from 'rxjs';
import { AuthentificationService } from '../authentification.service';
import { ComunicationSidenavService } from '../comunication-sidenav.service';
import { InstitutionService } from '../institution.service';
import { institution } from '../interfaces/institution';
import { Login } from '../models/login';
import { NotifierService } from '../notifier.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', Validators.required],
    institution: ['', Validators.required],
  });
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  hide = true;
  instituions: institution[] = [];


  constructor(private fb: FormBuilder, 
    private authentificationService: AuthentificationService,
    private comunication: ComunicationSidenavService,
    private institutionService: InstitutionService,
    private notificationService: NotifierService) {
      this.options = fb.group({
        hideRequired: this.hideRequiredControl,
        floatLabel: this.floatLabelControl,
      });
   }

  ngOnInit(): void {
 
    if (this.authentificationService.isLoggedin())
      {
        this.authentificationService.logout();
        //window.location.reload();
      }

    this.institutionService.getAllInstitutions().subscribe(response => this.instituions = response);
    
  }

  get f(){
    return this.loginForm.controls;
  }

  onLogin(){
    var loginData = new Login(this.loginForm.value);

    this.authentificationService.login(loginData).subscribe(response => {
      this.comunication.comunicationLoginResponeMethod(response);
    }, (error: HttpErrorResponse) => {
      this.notificationService.notificationAlert('Login failed', 'error');
    });

  }
  getErrorMessage() {
    if (this.loginForm.value.email.hasError('required')) {
      
      return 'You must enter a value';
    }

    return this.loginForm.value.email.hasError('email') ? 'Not a valid email' : '';
  }

}
