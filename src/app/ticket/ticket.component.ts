import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateTicketModel } from '../models/createTicketModel';
import { TicketModel } from '../models/ticketModel';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticketForm = this.fb.group({
    title: ['', Validators.required],
    arrivalEmail: ['', Validators.required],
    priority: [''],
    tag: [''],
    contentMessage: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private ticketService: TicketService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    debugger;
    /* var ticketData: CreateTicketModel = {
      TicketModel: new TicketModel(this.ticketForm.value),
      ContentMessage: this.ticketForm.value.contentMessage
    } */
    var ticketData = new CreateTicketModel();
    ticketData.ContentMessage = this.ticketForm.value.contentMessage;
    var ticketModel = new TicketModel();
    ticketModel.ArrivalEmail = this.ticketForm.value.arrivalEmail;
    ticketModel.Title = this.ticketForm.value.title;
    ticketModel.Priority = this.ticketForm.value.priority;
    ticketModel.Tag = [this.ticketForm.value.tag];
    ticketData.TicketModel = ticketModel;
    this.ticketService.createTicket(ticketData).subscribe();
  }

}
