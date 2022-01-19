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
    first_Name: ['', [Validators.required, Validators.minLength(2)]],
    last_Name: ['', [Validators.required, Validators.minLength(2)]],
    phone_Number: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    institutionName: ['-select-', Validators.required],
    roleName: ['-select-', Validators.required]
  });


  constructor(private fb: FormBuilder, private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
  }

  onRegister(){
    var registerData = new Registration(this.registrationForm.value);
    this.authentificationService.register(registerData).subscribe();
  }

}
