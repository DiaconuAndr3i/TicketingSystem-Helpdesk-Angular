import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GuestInformations } from './interfaces/guestInformations';
import { UserInformations } from './interfaces/userInformation';

@Injectable({
  providedIn: 'root'
})
export class UsersInformationsService {

  private usersInformationsSource = new Subject<UserInformations[]>();
  private guestsInformationsSource = new Subject<GuestInformations[]>();
  private selectorSource = new Subject<boolean>();

  userInformations$ = this.usersInformationsSource.asObservable();
  guestInformations$ = this.guestsInformationsSource.asObservable();
  selector$ = this.selectorSource.asObservable();

  userInformationsMethod(usersData: UserInformations[]){
    this.usersInformationsSource.next(usersData);
  }

  guestInformationsMethod(userData: GuestInformations[]){
    this.guestsInformationsSource.next(userData);
  }

  showSpecificList(val: boolean){
    this.selectorSource.next(val);
  }

}
