import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuestInformations } from '../interfaces/guestInformations';
import { UserInformations } from '../interfaces/userInformation';
import { UserService } from '../user.service';
import { UsersInformationsService } from '../users-informations.service';

@Component({
  selector: 'app-required-roles-admin',
  templateUrl: './required-roles-admin.component.html',
  styleUrls: ['./required-roles-admin.component.css']
})
export class RequiredRolesAdminComponent implements OnInit {

  users: UserInformations[] = [];
  guests: GuestInformations[] = [];
  institutionName: any = '';

  constructor(private userService: UserService, private route: ActivatedRoute, private usersInformations: UsersInformationsService) {
   }

  ngOnInit(): void {
    //this.institutionName = String(this.route.snapshot.paramMap.get('myInstitName'));
    this.institutionName = localStorage.getItem('institution') || "";
    this.userService.getAllUsers(this.institutionName).subscribe(response =>{
      this.users = response;
      this.usersInformations.userInformationsMethod(this.users);
      this.usersInformations.showSpecificList(-1);
    }); 
  }

  onClick(dummy: any){
    if(dummy == 0){
      this.userService.getAllUsers(this.institutionName).subscribe(response =>{
        this.usersInformations.userInformationsMethod(response);
        this.usersInformations.showSpecificList(-1);
      });
    }
    else{
      this.userService.getAllGuest(this.institutionName).subscribe(response =>{
        this.usersInformations.guestInformationsMethod(response);
        this.usersInformations.showSpecificList(1);
      });
    }
  }

}
