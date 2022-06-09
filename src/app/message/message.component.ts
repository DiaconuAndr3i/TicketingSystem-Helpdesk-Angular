import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';
import { message } from '../interfaces/message';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageModel } from '../models/messageModel';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  idTicket: string = "";
  messages?: message[];
  emailCurrentUser?: string;
  messageForm = this.fb.group({
    contentMessage: ['', Validators.required]
  });

  constructor(private route: ActivatedRoute, 
    private messageService: MessageService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.idTicket = String(this.route.snapshot.paramMap.get('idTicket'));
    this.emailCurrentUser = localStorage.getItem('email') || "";
    this.loadMessages();
  }

  loadMessages(){
    if (this.idTicket !== "")
      this.messageService.getMessageByIdTicket(this.idTicket).subscribe((response: message[]) => {
        this.messages = response;
      });
  }

  Send(){
    debugger;
    var message = new MessageModel();
    message.ContentMessage = this.messageForm.value.contentMessage;
    message.EmailCreator = this.emailCurrentUser;
    message.TicketId = this.idTicket;
    this.messageService.createMessage(message).subscribe(() => {
      this.loadMessages();
    });
  }

}
