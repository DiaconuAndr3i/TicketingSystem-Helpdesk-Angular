import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private Url = 'https://localhost:5001/api/Ticket';
  httpOptions = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(private http: HttpClient, private router: Router) { }

  createTicket(ticketData: any): Observable<any>{
    debugger
    return this.http.post<any>(`${this.Url}/createTicket`, ticketData);
  }
}
