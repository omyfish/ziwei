import { EmployeeFormComponent } from './../employee-form/employee-form.component';
import { Employee } from './../../../models/employee';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  addNew = true;
  employees: Employee[] = [];
  currentEmployee: Employee;
  employee: Employee;
  showDialog = false;
  fileNameDialogRef: MatDialogRef<EmployeeFormComponent>;
  dialogOpen = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.employees = JSON.parse(localStorage.getItem('employee'));
    this.employee = new Employee();
  }

  employeeChange(employee: Employee) {
    if (this.addNew ) {
      this.employees.push(employee);
      this.currentEmployee = new Employee();
    } else {
      this.addNew = true;
      this.currentEmployee.firstname = employee.firstname;
      this.currentEmployee.lastname = employee.lastname;
      this.currentEmployee.email = employee.email;
    }
    localStorage.setItem('employee', JSON.stringify(this.employees));
    this.showDialog = false;
  }

  editEmployee($event) {
    this.addNew = false;
    this.currentEmployee = $event;
    this.employee = {...this.currentEmployee};
    this.openDialog(false);
  }

  openDialog(isNew: boolean) {
    this.addNew = isNew;
    this.dialogOpen = true;
    this.fileNameDialogRef = this.dialog.open(EmployeeFormComponent, {
      hasBackdrop: false,
      data: isNew ? null : this.employee
    });

    this.fileNameDialogRef
        .afterClosed()
        .subscribe(data => {
          if (data) {
            this.employeeChange(data);
          }
          this.dialogOpen = false;
        });
  }

}
