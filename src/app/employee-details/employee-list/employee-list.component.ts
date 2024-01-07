import { Component, OnInit } from '@angular/core';
import { AddEmployeeServiceService } from '../add-employee-service.service';
import { Employee } from 'src/app/Models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
      employees:Employee[]=[];
      constructor(private empService:AddEmployeeServiceService) {
       
      }
  ngOnInit(): void {
    this.empService.getEmps().subscribe({
      next:(res)=>{this.employees=res},
      error:(err)=>{console.log(err)}
    }
    )
  }
}
