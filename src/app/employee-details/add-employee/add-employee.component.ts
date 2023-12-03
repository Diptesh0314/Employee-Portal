import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormArray   } from '@angular/forms';
import { Employee } from 'src/app/Models/employee.model';
import { AddEmployeeServiceService } from '../add-employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  employeeForm! : FormGroup ;
  empList:Employee[]=[];
  constructor(private fb: FormBuilder,private empService:AddEmployeeServiceService) {

  }
  ngOnInit(): void {
    this.employeeForm=this.fb.group({
      srchItem: [''],
      emps: this.fb.array([
        this.fb.group({  
          EmpName: '',  
          Address: '',  
          Gender:''
        }) 
      ]) 
    })
  }


  newEmp(): FormGroup {  
    return this.fb.group({  
      EmpName: '',  
      Address: '',  
      Gender:'' 
    })
  }  
  rtnEmpArray() : FormArray {  
    return this.employeeForm.get("emps") as FormArray  
  } 

  addEmployee(){
    this.rtnEmpArray().push(this.newEmp())
  }

  removeEmp(i:number) {  
      if(i>0){
        this.rtnEmpArray().removeAt(i);  
      }  
  }

  editEmp(i:number){
    if(i>0){
      console.log(this.employeeForm.value.emps[i].EmpName + this.employeeForm.value.emps[i].Address)
    }
  }
  
  submitData(){
    if (this.employeeForm.valid){
        
        console.log(this.employeeForm.controls['srchItem'].value);
        console.log(this.rtnEmpArray().controls[0]?.value.EmpName);
        console.log(this.employeeForm.value.emps[0]?.EmpName);
        for(let i=0;i<this.employeeForm.value.emps.length;i++){
          let emp = new Employee();
          emp.empName=this.employeeForm.value.emps[i].EmpName;
          emp.empAddress=this.employeeForm.value.emps[i].Address;
          emp.genderId=parseInt(this.employeeForm.value.emps[i].Gender);
          console.log(emp);
          this.empList.push(emp);
        }
        this.empService.postEmps(this.empList).subscribe({
          next:(res)=>{console.log(res)},
          error:(err)=>{console.log(err)}
        }
        )
    }   
  }

}
