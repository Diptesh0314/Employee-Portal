import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-details/employee-list/employee-list.component';
import { AddEmployeeComponent } from './employee-details/add-employee/add-employee.component';

const routes: Routes = [{
  component:EmployeeListComponent,
  path:'employee-list'
},
{
  component:AddEmployeeComponent,
  path:'AddEmployee'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
