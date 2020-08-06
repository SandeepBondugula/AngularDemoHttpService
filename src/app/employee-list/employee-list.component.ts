import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private httpService:HttpClient) { }
  employees: string[];
  ngOnInit() {
    this.httpService.get('https://localhost:44308/api/Employees').subscribe(
      data=>{
        this.employees=data as string [];
      }
    );
  }
}
