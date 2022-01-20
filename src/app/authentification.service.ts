import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable, of } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private authUrl = 'https://localhost:5001/api/Authentification';
  httpOptions = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private router: Router, private jwtService: JwtHelperService, private loginService: LoginService) { }


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
        this.router.navigate(['/home']);
        this.loginService.addLoginResponse(response);
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
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


}
