import { EmployeeComponent } from './employee/employee/employee.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { EmployeeOverviewComponent } from './employee/employee-overview/employee-overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
        {
          path: 'employee',
          component: EmployeeComponent
        }
    ],
    component: AdminPanelComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
