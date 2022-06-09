import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { role } from './interfaces/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private Url = 'https://localhost:5001';
  httpOptions = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getAllRoles(): Observable<any>{
    const url = `${this.Url}/getAllRoles`;
    return this.http.get<role[]>(url);
  }
}
