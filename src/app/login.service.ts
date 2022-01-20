import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginResponse } from './interfaces/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginResponse?: LoginResponse;

  constructor() { }

  addLoginResponse(userData: any){
    this.loginResponse = userData;
  }

  getLoginResponse(): Observable<any>{
    return of(this.loginResponse);
  }
}
