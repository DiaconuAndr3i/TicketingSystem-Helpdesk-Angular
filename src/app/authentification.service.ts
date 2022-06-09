import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private authUrl = 'https://localhost:5001/api/Authentification';
  httpOptions = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, 
    private router: Router, 
    private jwtService: JwtHelperService) { }


  register(registerData: any): Observable<any>{
    return this.http.post<any>(`${this.authUrl}/register`, registerData)
    .pipe(map(() => {
      this.router.navigate(['/login']);
    }));
  }

  login(loginData: any): Observable<any>{
    return this.http.post<any>(`${this.authUrl}/login`, loginData)
    .pipe(map((response: any) => {
      if (response?.accessToken){
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('email', loginData.email);
        localStorage.setItem('institution', loginData.institution);
        localStorage.setItem('firstName', response.firstName);
        localStorage.setItem('lastName', response.lastname);
        this.router.navigate([`/home/${response.institution}/${response.firstName}/${response.lastname}`]);
        return response;
      }
    }));
  }

  isLoggedin(){
    const token  = localStorage.getItem('token') || "";
    return !this.jwtService.isTokenExpired(token);
  }

  getRolesToken(): Observable<any>{
    const token  = localStorage.getItem('token') || "";
    return of(this.jwtService.decodeToken(token).role);
  }


  logout(){
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('institution');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    this.router.navigate(['/login']);
  }

  getToken(){
    return localStorage.getItem('token');
  }


}
