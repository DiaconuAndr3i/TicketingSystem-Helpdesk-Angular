import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { institution } from './interfaces/institution';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  private Url = 'https://localhost:5001';
  httpOptions = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getAllInstitutions(): Observable<any>{
    const url = `${this.Url}/getAllInstitutions`;
    return this.http.get<institution[]>(url);
  }
}
