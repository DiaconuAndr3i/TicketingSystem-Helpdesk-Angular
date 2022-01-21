import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GuestInformations } from '../interfaces/guestInformations';
import { UsersInformationsService } from '../users-informations.service';

@Component({
  selector: 'app-guest-informations',
  templateUrl: './guest-informations.component.html',
  styleUrls: ['./guest-informations.component.css']
})
export class GuestInformationsComponent implements OnInit, OnDestroy {

  guests: GuestInformations[] = [];
  subscription: Subscription;
  selector?: boolean;

  constructor(private usersInformations: UsersInformationsService) { 
    debugger
    this.subscription = usersInformations.guestInformations$.subscribe((response: GuestInformations[])=>{
      this.guests = response;
    });
    this.subscription = usersInformations.selector$.subscribe((response: boolean) =>{
      this.selector = response;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
