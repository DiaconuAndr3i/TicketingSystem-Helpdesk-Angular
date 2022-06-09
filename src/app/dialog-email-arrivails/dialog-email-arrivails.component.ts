import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartmentService } from '../department.service';
import { departmentResponse } from '../interfaces/departmentResponse';
import { subdepartmentResponse } from '../interfaces/subdepartmentResponse';
import { UserInformations } from '../interfaces/userInformation';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dialog-email-arrivails',
  templateUrl: './dialog-email-arrivails.component.html',
  styleUrls: ['./dialog-email-arrivails.component.css']
})
export class DialogEmailArrivailsComponent implements OnInit {

  departments: departmentResponse[] = [];

  departmentSelected?: String;
  subdepartments: subdepartmentResponse[] = [];
  subdepartmentSelected: String='';
  users: UserInformations[] = [];
  

  constructor(public dialogRef: MatDialogRef<DialogEmailArrivailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private departmentService: DepartmentService, private userService: UserService) { 
  }

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe(response => {
        this.departments = response;
    });
  }

  onNoClick(){
    this.dialogRef.close();
  }

  getSubdepartment(departmentId: any, departmentName: any){
    this.departmentSelected = departmentName;
    this.departmentService.getSubdepartmentByDepartmentId(departmentId).subscribe(response => {
      this.subdepartments = response;
      if (response.length === 0){
        this.onGetArrivals('-');
      }
    })
  }

  onGetArrivals(subdept: any){
    if (subdept !== '-'){
      this.subdepartmentSelected = subdept;
    }
    const institName = localStorage.getItem('institution') || "";
    this.userService.getAllUsersByInstitDeptSubdept(institName, this.departmentSelected, subdept).subscribe(response =>{
      this.users = response;
    });
  }

}
