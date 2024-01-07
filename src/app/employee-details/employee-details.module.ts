import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';


@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    EmployeeDetailsRoutingModule
  ],
  exports:[
    EmployeeListComponent,
    AddEmployeeComponent
  ]
})
export class EmployeeDetailsModule { }
