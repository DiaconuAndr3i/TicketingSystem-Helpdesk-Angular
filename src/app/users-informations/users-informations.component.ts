import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GuestInformations } from '../interfaces/guestInformations';
import { UserInformations } from '../interfaces/userInformation';
import { UsersInformationsService } from '../users-informations.service';

@Component({
  selector: 'app-users-informations',
  templateUrl: './users-informations.component.html',
  styleUrls: ['./users-informations.component.css']
})
export class UsersInformationsComponent implements OnInit, OnDestroy {

  users: UserInformations[] = [];
  subscription: Subscription;
  selector?: boolean;

  constructor(private usersInformations: UsersInformationsService) {
    debugger;
    this.subscription = usersInformations.userInformations$.subscribe((response: UserInformations[] )=>{
      this.users = response;
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
