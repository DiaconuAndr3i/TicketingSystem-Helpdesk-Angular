import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogEmailArrivailsComponent } from '../dialog-email-arrivails/dialog-email-arrivails.component';
import { CreateTicketModel } from '../models/createTicketModel';
import { TicketModel } from '../models/ticketModel';
import { NotifierService } from '../notifier.service';
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

  tags: string[] = ['Question', 'Document request'];

  emailArrivail?: String

  constructor(private fb: FormBuilder, 
    private ticketService: TicketService, 
    public dialog: MatDialog, private notificationService: NotifierService) { }

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
    ticketModel.Tag = this.ticketForm.value.tag;
    ticketData.TicketModel = ticketModel;
    this.ticketService.createTicket(ticketData).subscribe((response) => {
      this.notificationService.notificationAlert('Ticket successfully created', 'success');
    },
    (error: HttpErrorResponse) => {
      this.notificationService.notificationAlert('Something went wrong with the ticket', 'error');
    });
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(DialogEmailArrivailsComponent, {
      data: {name: this.emailArrivail}
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.emailArrivail = result;
    })
  }

}
