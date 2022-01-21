import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserInformations } from '../interfaces/userInformation';
import { UsersInformationsService } from '../users-informations.service';

@Component({
  selector: 'app-users-informations',
  templateUrl: './users-informations.component.html',
  styleUrls: ['./users-informations.component.css']
})
export class UsersInformationsComponent implements OnInit {

  users: UserInformations[] = [];
  subscription: Subscription;

  constructor(private usersInformations: UsersInformationsService) {
    this.subscription = usersInformations.userInformations$.subscribe((response: UserInformations[] )=>{
      this.users = response;
    });

   }

  ngOnInit(): void {
  }

}
