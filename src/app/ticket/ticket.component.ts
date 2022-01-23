import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateTicketModel } from '../models/createTicketModel';
import { TicketModel } from '../models/ticketModel';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    var ticketData = new CreateTicketModel(this.ticketForm.value);
  }

}
