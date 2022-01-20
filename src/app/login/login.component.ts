import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    email: ['', Validators.required],
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
