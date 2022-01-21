import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserInformations } from './interfaces/userInformation';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Url = 'https://localhost:5001';

  constructor(private http: HttpClient) {
   }

  getAllUsers(institutionName: any): Observable<any>{
    debugger
    var institutionName = institutionName.replace(/ /g, "%20");
    const url = `${this.Url}/getAllUsers/${institutionName}`;
    return this.http.get<UserInformations[]>(url);
  }
}
