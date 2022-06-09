import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private notification: MatSnackBar) { }

  notificationAlert(message: string, typeNotification: 'error' | 'success'){
    this.notification.open(message, 'Ok',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: typeNotification
    });
  }

}
