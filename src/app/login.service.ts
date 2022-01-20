import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { LoginResponse } from './interfaces/loginResponse';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginResponseSource = new Subject<any>();
  //loginResponse?: LoginResponse;

  /*loginResponse$ = this.loginResponseSource.asObservable();

  addLoginResponse(userData: LoginResponse){
    debugger
    this.loginResponseSource.next(userData);
  }*/
}
