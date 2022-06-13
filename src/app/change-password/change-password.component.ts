import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { changePassword } from '../models/changePassword';
import { NotifierService } from '../notifier.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm = this.fb.group({
    password: ['', Validators.required]
  });

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  hide = true;
  token?: string;
  userId?: string;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private authetificationService: AuthentificationService,
    private notificationService: NotifierService) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
   }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get("token") || "";
    this.userId = this.route.snapshot.queryParamMap.get("userid") || "";
  }

  get f(){
    return this.changePasswordForm.controls;
  }

  onSubmit(){
    var changePasswordModel = new changePassword();
    changePasswordModel.Password = this.changePasswordForm.value.password;
    changePasswordModel.Token = this.token;
    changePasswordModel.UserId = this.userId;
    this.authetificationService.changePassword(changePasswordModel).subscribe((response: any) => {
      this.notificationService.notificationAlert('Password changed successfully', 'success');
    },
    (error: any) => {
      this.notificationService.notificationAlert('Something went wrong', 'error');
    });
  }

}
