import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GuestInformations } from '../interfaces/guestInformations';
import { HandleUserRoleModel } from '../models/handleUserRoleModel';
import { UserService } from '../user.service';
import { UsersInformationsService } from '../users-informations.service';

@Component({
  selector: 'app-guest-informations',
  templateUrl: './guest-informations.component.html',
  styleUrls: ['./guest-informations.component.css']
})
export class GuestInformationsComponent implements OnInit, OnDestroy {

  guests: GuestInformations[] = [];
  subscription: Subscription;
  selector?: number;
  myInstitName?: string;

  constructor(private usersInformations: UsersInformationsService, private route: ActivatedRoute, private userService: UserService) { 
    debugger
    this.subscription = usersInformations.guestInformations$.subscribe((response: GuestInformations[])=>{
      this.guests = response;
    });
    this.subscription = usersInformations.selector$.subscribe((response: number) =>{
      this.selector = response;
    });
  }

  ngOnInit(): void {
    this.myInstitName = String(this.route.snapshot.paramMap.get('myInstitName'));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  onAssignRole(email: string, requiredRoles: string[]){
    debugger
    const handleUserRoleModel: HandleUserRoleModel = {
      Email: email,
      RoleName: requiredRoles[0],
      InstitutionName: this.myInstitName
    };

    this.userService.assignRequiredRolesUsers(handleUserRoleModel).subscribe();
  }

}
