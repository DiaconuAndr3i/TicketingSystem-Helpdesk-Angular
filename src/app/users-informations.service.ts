import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserInformations } from './interfaces/userInformation';

@Injectable({
  providedIn: 'root'
})
export class UsersInformationsService {

  private usersInformationsSource = new Subject<UserInformations[]>();

  userInformations$ = this.usersInformationsSource.asObservable();

  userInformationsMethod(usersData: UserInformations[]){
    this.usersInformationsSource.next(usersData);
  }
}
