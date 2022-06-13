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

  /*getNumberOfUsers(): Observable<number>{
    return this.http.get<number>(`${this.URL}/numberOfUsers`);
  }

  getNumberOfTickets(): Observable<number>{
    return this.http.get<number>(`${this.URL}/numberOfTickets`);
  }

  getPercentageGuests(): Observable<number>{
    return this.http.get<number>(`${this.URL}/percentageGuests`);
  }

  getNumberOfInstitutions(): Observable<number>{
    return this.http.get<number>(`${this.URL}/numberOfInstituions`);
  }*/

  peoplePerDepartment(institutionName: any): Observable<any>{
    var institutionName = institutionName.replace(/ /g, "%20");
    const url = `${this.URL}/peoplePerDepartment/${institutionName}`;
    return  this.http.get<any>(url);
  }

  numberOfTicketsOpenClosed(): Observable<any>{
    return this.http.get<any>(`${this.URL}/numberOfTicketsOpenClosed`);
  }

  getPercentageGuests(): Observable<number>{
    return this.http.get<number>(`${this.URL}/percentageGuests`);
  }

  getFinanceData(): Observable<any>{
    const url = 'https://financialmodelingprep.com/api/v3/fx?apikey=CEVA';
    return this.http.get<any>(url);
  }
}
