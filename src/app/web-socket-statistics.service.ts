import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketStatisticsService {

  private URLSocket = "ws://localhost:";

  private webSocket: any;

  constructor() { }

  getFromWebSocketKafkaService(port: number): Observable<any>{
    this.webSocket = webSocket(`${this.URLSocket}${port}`);//port for resurce
    return this.webSocket.asObservable();
  }
}
