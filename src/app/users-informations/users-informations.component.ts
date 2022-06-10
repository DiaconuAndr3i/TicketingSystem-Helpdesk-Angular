import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GuestInformations } from '../interfaces/guestInformations';
import { UserInformations } from '../interfaces/userInformation';
import { UserService } from '../user.service';
import { UsersInformationsService } from '../users-informations.service';

@Component({
  selector: 'app-users-informations',
  templateUrl: './users-informations.component.html',
  styleUrls: ['./users-informations.component.css']
})
export class UsersInformationsComponent implements OnInit, OnDestroy {

  users: UserInformations[] = [];
  subscription: Subscription;
  selector?: number;
  institutionName?: String;

  constructor(private usersInformations: UsersInformationsService, private userService: UserService) {
    this.subscription = usersInformations.userInformations$.subscribe((response: UserInformations[] )=>{
      //this.users = response;
      this.filterUsers(response);
    });
    this.subscription = usersInformations.selector$.subscribe((response: number) =>{
      this.selector = response;
    });
   }

  ngOnInit(): void {
    this.institutionName = localStorage.getItem('institution') || "";
  }

  filterUsers(response: UserInformations[]): any{
    this.users = [];
    for(let item of response){
      var ok = false;
        for(var elem of item.roles)
          if ( elem === 'Administrator' )
            ok = true;
        if (!ok)
          this.users.push(item);
    }
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  onDelete(email: string){
    debugger
    this.userService.deleteAccountUser(email).subscribe(() => {
      this.userService.getAllUsers(this.institutionName).subscribe((response: UserInformations[]) => {
        this.filterUsers(response);
      });
    });
  }

}
