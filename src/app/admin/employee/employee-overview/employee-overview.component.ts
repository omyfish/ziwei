import { Employee } from './../../../models/employee';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.css']
})
export class EmployeeOverviewComponent implements OnInit {

  @Input()
  employees: Employee[] = [];

  @Output()
  editEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit() {
  }

  delete(i: number) {
    this.employees.splice(i, 1);
  }

  edit(i: number) {
    this.editEmployee.emit(this.employees[i]);
  }
}
