import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { departmentResponse } from './interfaces/departmentResponse';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private URL = "https://localhost:5001";
  httpOptions = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getAllDepartments(): Observable<any>{
    const url = `${this.URL}/getAllDepartments`;
    return this.http.get<departmentResponse[]>(url);
  }
 
  getSubdepartmentByDepartmentId(idDepartment: any): Observable<any>{
    const url = `${this.URL}/getSubdepartmentsByDepartment/${idDepartment}`;
    var result = this.http.get<any>(url);
    console.log(result);
    return result;
  }
}
