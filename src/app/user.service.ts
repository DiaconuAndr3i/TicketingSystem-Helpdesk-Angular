import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserInformations } from './interfaces/userInformation';
import { HandleUserRoleModel } from './models/handleUserRoleModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Url = 'https://localhost:5001';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
   }

  getAllUsers(institutionName: any): Observable<any>{
    var institutionName = institutionName.replace(/ /g, "%20");
    const url = `${this.Url}/getAllUsers/${institutionName}`;
    return this.http.get<UserInformations[]>(url);
  }

  getAllGuest(institutionName: any): Observable<any>{
    debugger;
    var institutionName = institutionName.replace(/ /g, "%20");
    const url = `${this.Url}/getAllGuests/${institutionName}`;
    return this.http.get<UserInformations[]>(url);
  }

  deleteAccountUser(email: any): Observable<any>{
    debugger
    var email  = email.replace("@", "%40");
    return this.http.delete<any>(`${this.Url}/${email}`);
  }

  assignRequiredRolesUsers(userData: HandleUserRoleModel): Observable<any>{
    debugger
    return this.http.post<HandleUserRoleModel>(`${this.Url}/assignRequiredRolesUsers`, userData, this.httpOptions);
  }

  getAllUsersByInstitDeptSubdept(institName: any, dept: any, subdept: any): Observable<any>{
    var institName = institName.replace(/ /g, "%20");
    var subdept = subdept.replace(/ /g, "%20");
    const url = `${this.Url}/getAllUsersByInstitDeptSubdept/${institName}/${dept}/${subdept}`
    return this.http.get<UserInformations[]>(url);
  }
}
