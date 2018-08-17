import { ModelModule } from './models/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './admin/employee/employee-form/employee-form.component';
import { EmployeeOverviewComponent } from './admin/employee/employee-overview/employee-overview.component';
import { Employee } from './models/employee';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PalaceComponent } from './palace/palace.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'admin-panel',
    loadChildren: './admin/admin.module#AdminModule'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PalaceComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
