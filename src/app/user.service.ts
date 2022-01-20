import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserInformations } from './interfaces/userInformation';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Url = 'https://localhost:5001/api/Users';

  constructor(private http: HttpClient) {
   }

  getAllUsers(institutionName: any): Observable<any>{
    debugger
    const url = `${this.Url}/${institutionName}`;
    return this.http.get<UserInformations[]>(url);
  }
}
