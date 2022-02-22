import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private URL = "https://localhost:5001";
  httpOptions = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getNumberOfUsers(): Observable<number>{
    return this.http.get<number>(`${this.URL}/numberOfUsers`);
  }

  getNumberOfTickets(): Observable<number>{
    return this.http.get<number>(`${this.URL}/numberOfTickets`);
  }

  getPercentageGuests(): Observable<number>{
    return this.http.get<number>(`${this.URL}/percentageGuests`);
  }
}
