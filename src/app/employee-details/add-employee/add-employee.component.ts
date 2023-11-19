import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormArray   } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  employeeForm! : FormGroup ;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.employeeForm=this.fb.group({
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
  
  submitData(){
    console.log("submitted");
  }




}
