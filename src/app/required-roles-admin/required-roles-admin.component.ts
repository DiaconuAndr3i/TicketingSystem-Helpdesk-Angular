import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  institutionName: any = '';


  constructor(private userService: UserService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.institutionName = String(this.route.snapshot.paramMap.get('myInstitName')); 
  }

  onClick(dummy: any){
    debugger
    if (dummy == 0)
      this.userService.getAllUsers(this.institutionName).subscribe(response => this.users = response);
  }

}
