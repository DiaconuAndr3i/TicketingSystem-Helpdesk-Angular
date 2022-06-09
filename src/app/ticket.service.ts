import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ticket } from './interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private Url = 'https://localhost:5001';
  httpOptions = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(private http: HttpClient, private router: Router) { }

  createTicket(ticketData: any): Observable<any>{
    debugger
    return this.http.post<any>(`${this.Url}/api/Ticket/createTicket`, ticketData);
  }

  getTicketsReceivedOrSent(email: any, sentOrReceivedParam: any): Observable<any>{
    var email  = email.replace("@", "%40");
    const url = `${this.Url}/getTicketsByCreatorOrArrival/${email}/${sentOrReceivedParam}`;
    return this.http.get<ticket[]>(url);
  }

  deleteTicketById(idTicket: any): Observable<any>{
    const url = `${this.Url}/deleteTicketById/${idTicket}`;
    return this.http.delete<any>(url);
  }

  changeActivityTicket(idTicket: any, activity: Boolean): Observable<any>{
    const url = `${this.Url}/changeActivityTicket/${idTicket}/${activity}`;
    return this.http.put<any>(url, null);
  }

}
