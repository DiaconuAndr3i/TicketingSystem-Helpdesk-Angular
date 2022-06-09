import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { InstitutionService } from '../institution.service';
import { institution } from '../interfaces/institution';
import { role } from '../interfaces/role';
import { Registration } from '../models/registration';
import { RoleService } from '../role.service';

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
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword :['', [Validators.required, Validators.minLength(6)]],
    institutionName: ['', Validators.required],
    roleName: ['', Validators.required]
  },
  {
    validators: this.matchPasswords('password', 'confirmPassword')
  });
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  roles: role[] = [];
  institutions: institution[] = [];
  hide = true;


  constructor(private fb: FormBuilder, 
    private authentificationService: AuthentificationService,
    private roleService: RoleService,
    private institutionService: InstitutionService) {
      this.options = this.fb.group({
        hideRequired: this.hideRequiredControl,
        floatLabel: this.floatLabelControl,
      });
     }
     

  ngOnInit(): void {
    this.roleService.getAllRoles().subscribe(response => {
      for(let item of response){
        if (item.roleId != 'Guest')
          {
            this.roles.push(item);
          }
      }
    });
    this.institutionService.getAllInstitutions().subscribe(response => this.institutions = response);
  }

  get f(){
    return this.registrationForm.controls;
  }

  matchPasswords(password: any, confirmPassword: any){
    return (fg: FormGroup) =>{
      const passwordControl = fg.controls[password];
      const confirmPasswordControl = fg.controls[confirmPassword];

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['matchPasswords']){
        return;
      }

      if (passwordControl.value !== confirmPasswordControl.value){
        confirmPasswordControl.setErrors({ matchPasswords: true });
      }
      else{
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  onRegister(){
    var registerData = new Registration(this.registrationForm.value);
    this.authentificationService.register(registerData).subscribe();
  }

  /*getErrorMessageName(name: boolean) {

    if (name == false){
      if (this.registrationForm.value.first_Name.hasError('required')) {
      
        return 'You must enter a value';
      }
  
      return this.registrationForm.value.first_Name.hasError('first name') ? 'Not a valid name' : '';
    }
    if (this.registrationForm.value.last_Name.hasError('required')) {
      
      return 'You must enter a value';
    }

    return this.registrationForm.value.last_Name.hasError('last name') ? 'Not a valid name' : '';
  }

  getErrorMessageEmail() {
    if (this.registrationForm.value.email.hasError('required')) {
      
      return 'You must enter a value';
    }

    return this.registrationForm.value.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePhoneNumber(){
    if (this.registrationForm.value.phone_Number.hasError('required')) {
      
      return 'You must enter a value';
    }

    return this.registrationForm.value.phone_Number.hasError('phoneNumber') ? 'Not a valid phone number' : '';
  }*/

}
