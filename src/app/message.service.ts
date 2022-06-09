import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { message } from './interfaces/message';
import { MessageModel } from './models/messageModel';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private Url = 'https://localhost:5001';
  httpOptions = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:  HttpClient){}

  getMessageByIdTicket(idTicket: String): Observable<any>{
    return this.http.get<message[]>(`${this.Url}/getMessagesFromTicket/${idTicket}`);
  }

  createMessage(message: MessageModel): Observable<any>{
    return this.http.post<any>(`${this.Url}/createMessage`, message);
  }
}
