import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { LoginResponse } from '../interfaces/loginResponse';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', Validators.required],
    institution: ['-select-', Validators.required],
  });


  constructor(private fb: FormBuilder, private authentificationService: AuthentificationService) {
   }

  ngOnInit(): void {
    if(this.authentificationService.isLoggedin())
      this.authentificationService.logout();
  }

  onLogin(){
    var loginData = new Login(this.loginForm.value);
    this.authentificationService.login(loginData).subscribe();
  }

}
