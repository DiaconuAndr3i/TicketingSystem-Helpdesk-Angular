import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { resetPassword } from '../models/resetPassword';
import { NotifierService } from '../notifier.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[a-z]{2,4}$")]]
  });

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(private authetificationService: AuthentificationService,
    private fb: FormBuilder,
    private notificationService: NotifierService) { 
      this.options = fb.group({
        hideRequired: this.hideRequiredControl,
        floatLabel: this.floatLabelControl,
      });
    }

  ngOnInit(): void {
  }

  onSubmit(){
    var resetPasswordModel = new resetPassword(this.resetPasswordForm.value);
    this.authetificationService.resetPassword(resetPasswordModel).subscribe((response: any) => {
      this.notificationService.notificationAlert('Password reset successfully', 'success');
    },
    (error: any) => {
      this.notificationService.notificationAlert('Something went wrong', 'error');
    });
  }

  get f(){
    return this.resetPasswordForm.controls;
  }

}
