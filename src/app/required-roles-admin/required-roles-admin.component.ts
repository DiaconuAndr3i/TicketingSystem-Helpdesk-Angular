import { Component, OnInit } from '@angular/core';
import { UserInformations } from '../interfaces/userInformation';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-required-roles-admin',
  templateUrl: './required-roles-admin.component.html',
  styleUrls: ['./required-roles-admin.component.css']
})
export class RequiredRolesAdminComponent implements OnInit {

  users: UserInformations[] = [];
  institutionName = '';


  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
  }

  onClick(dummy: any){
    debugger
    if (dummy == 0)
      this.userService.getAllUsers(this.institutionName).subscribe(response => this.users = response);
  }

}
