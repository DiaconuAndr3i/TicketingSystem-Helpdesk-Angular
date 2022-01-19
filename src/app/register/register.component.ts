import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { Registration } from '../models/registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    phoneNumber: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    institutionName: ['', Validators.required],
    roleName: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
  }

  onRegister(){
    var registerData = new Registration(this.registrationForm.value);
    this.authentificationService.register(registerData).subscribe();
  }

}
