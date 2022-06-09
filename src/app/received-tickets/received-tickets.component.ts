import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ticket } from '../interfaces/ticket';
import { NotifierService } from '../notifier.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-received-tickets',
  templateUrl: './received-tickets.component.html',
  styleUrls: ['./received-tickets.component.css']
})
export class ReceivedTicketsComponent implements OnInit {

  tickets?: ticket[];
  lastEvent = false;


  constructor(private ticketService: TicketService,
    private notificationService: NotifierService) { }

  ngOnInit(): void {
    this.getTicketsReceivedOrSent(false);
  }

  getTicketsReceivedOrSent(sentOrReceivedParam: Boolean){
    const email  = localStorage.getItem('email') || "";
    if( email !== "" ){
      this.ticketService.getTicketsReceivedOrSent(email, sentOrReceivedParam).subscribe((response: ticket[]) => {
          this.tickets = response;
      });
    }
  }

  eventEmitted(event: MatTabChangeEvent){
    switch(event.index) { 
      case 0: { 
         this.getTicketsReceivedOrSent(false);
         this.lastEvent = false;
         break; 
      } 
      case 1: { 
         this.getTicketsReceivedOrSent(true); 
         this.lastEvent = true;
         break; 
      }
      case 2: {
        break;
      } 
      default: { 
         break; 
      } 
   } 
  }


  deleteTicket(idTicket: any){
    this.ticketService.deleteTicketById(idTicket).subscribe((response) =>{
      this.getTicketsReceivedOrSent(this.lastEvent);
      this.notificationService.notificationAlert('Ticket successfully deleted', 'success');
    })
  }

  changeActivity(idTicket: any){
    this.ticketService.changeActivityTicket(idTicket, false).subscribe();
  }


}
