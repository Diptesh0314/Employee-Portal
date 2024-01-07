import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddEmployeeServiceService {
  bulkEmp:Employee[];
  baseUrl:string = "https://localhost:7144/api";
  constructor(private http : HttpClient) { }
  postEmps(emps:Employee[]):Observable<any>{
    return this.http.post<any>(this.baseUrl+"/Employee/AddEmployee",emps);
    }
  
    getEmps():Observable<any>{
      return this.http.get<any>(this.baseUrl+"/Employee/GetEmployees");
    }

}
