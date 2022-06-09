import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationSidenavService {

  private comunicationLoginResponseSource = new Subject<any>();
  //private comunicationLogoutSource = new Subject<any>();

  //private comunicationLoginSource = new Subject<any>();
  /*private comunicationAdminSource = new Subject<any>();
  private comunicationRolesSource = new Subject<any[]>();
  private comunicationFirstNameSource = new Subject<string>();
  private comunicationLastNameSource = new Subject<string>();*/

  comunicationLoginResponse$ = this.comunicationLoginResponseSource.asObservable();
  //comunicationLogout$ = this.comunicationLoginSource.asObservable();

  //comunicationLogin$ = this.comunicationLoginSource.asObservable();
  /*comunicationAdmin$ = this.comunicationAdminSource.asObservable();
  comunicationRoles$ = this.comunicationRolesSource.asObservable();
  comunicationFirstName$ = this.comunicationFirstNameSource.asObservable();
  comunicationLastName$ = this.comunicationLastNameSource.asObservable();*/

  /*comunicationLoginMethod(obj: any){
    this.comunicationLoginSource.next(obj);
  }*/

  /*comunicationAdminMethod(obj: any){
    this.comunicationAdminSource.next(obj);
  }

  comunicationRolesMethod(obj: any[]){
    this.comunicationRolesSource.next(obj);
  }

  comunicationFirstNameMethod(obj: string){
    this.comunicationFirstNameSource.next(obj);
  }

  comunicationLastNameMethod(obj: string){
    this.comunicationLastNameSource.next(obj);
  }*/


  

  /*comunicationLogoutMethod(obj: any){
    this.comunicationLogoutSource.next(obj);
  }*/

  comunicationLoginResponeMethod(obj: any){
    this.comunicationLoginResponseSource.next(obj);
  }
}
