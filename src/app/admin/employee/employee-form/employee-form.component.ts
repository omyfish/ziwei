import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Employee } from './../../../models/employee';
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, Input, Inject } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @ViewChild('firstnameElem')
  firstnameElem: ElementRef;
  isNew = false;
  @Output()
  employeeChanged: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(
    private dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public employee: Employee) { }

  ngOnInit() {
    if (this.employee === null) {
      this.isNew = true;
      this.employee = new Employee();
    }
  }

  add() {
    this.employeeChanged.emit(this.employee);
    this.dialogRef.close({...this.employee});
    this.clear();
  }

  close() {
    this.dialogRef.close();
  }

  clear() {
    this.employee.firstname = '';
    this.employee.lastname = '';
    this.employee.email = '';
    this.firstnameElem.nativeElement.focus();
  }
}
