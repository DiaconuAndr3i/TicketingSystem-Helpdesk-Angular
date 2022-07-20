import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthentificationService } from './authentification.service';
import { ComunicationSidenavService } from './comunication-sidenav.service';
import { NotifierService } from './notifier.service';
import { WebSocketStatisticsService } from './web-socket-statistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'TicketingSystem-Helpdesk-Frontend';
  optionsAfterLogin: boolean = false;
  optionsAdmin: boolean = false;
  optionsGuest: boolean = false;
  roles: any[] = [];
  myInstitName?: string;
  firstName?: string;
  lastName?: string;
  subscription: Subscription;
  ticketOption: boolean = false;

  constructor(private authService: AuthentificationService, 
    private route: ActivatedRoute,
    private comunication: ComunicationSidenavService,
    private notifierAlert: NotifierService,
    private webSocket: WebSocketStatisticsService) {
      this.subscription = this.comunication.comunicationLoginResponse$.subscribe((response: any) => {
        this.optionsAfterLogin = true;
        this.firstName = response.firstName;
        this.lastName = response.lastname;
        this.myInstitName = response.institution;
        this.roles = response.roles;
        if (this.roles.includes('Administrator'))
          {
            this.optionsAdmin = true;
            this.optionsGuest = false;
          }
        else if( this.roles.includes('Guest') )
          this.optionsGuest = true;
      });
      
     }


  ngOnInit(): void {
    if (this.authService.isLoggedin()){
      this.optionsAfterLogin = true;
      this.authService.getRolesToken().subscribe(roles => this.roles = roles);
      this.myInstitName = localStorage.getItem('institution') || "";
      this.firstName = localStorage.getItem('firstName') || "";
      this.lastName = localStorage.getItem('lastName') || "";
      /*this.myInstitName = String(this.route.snapshot.paramMap.get('myInstitName')); 
      this.firstName = String(this.route.snapshot.paramMap.get('firstName'));
      this.lastName = String(this.route.snapshot.paramMap.get('lastName'));*/
      if (this.roles.includes('Administrator'))
      {
        this.optionsAdmin = true;
        this.optionsGuest = false;
      }
      else if( this.roles.includes('Guest') )
        this.optionsGuest = true;
      
      this.webSocket.getFromWebSocketKafkaService(3002).subscribe((response: any) => {
        let myEmail = localStorage.getItem('email') || "";
        let dataJson = JSON.parse(response);
        
        if(myEmail === dataJson.ArrivalEmail)
          this.notifierAlert.newMessageAlert(dataJson.CreatorEmail);
      });
    }

    

  }

  optionTicket(){
    if (!this.ticketOption){
      this.ticketOption = true;
    }
    else{
      this.ticketOption = false;
    }
  }

  logout(){
    this.optionsAdmin = false;
    this.optionsAfterLogin = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
