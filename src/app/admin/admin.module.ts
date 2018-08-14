import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { FormsModule } from '@angular/forms';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { EmployeeOverviewComponent } from './employee/employee-overview/employee-overview.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  declarations: [
    EmployeeOverviewComponent,
    EmployeeFormComponent,
    EmployeeComponent,
    AdminPanelComponent,
    AdminNavbarComponent
  ],
  entryComponents: [
    EmployeeFormComponent
  ]
})
export class AdminModule { }
