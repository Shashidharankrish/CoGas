import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignShiftComponent } from './assign-shift/assign-shift.component';
import { AdminComponent } from './admin/admin.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 { path:"assignShift",component:AssignShiftComponent},
 { path: "admin", component:AdminComponent},
 { path: "add-device", component:AddDeviceComponent},
 { path: "assignshift", component:AssignShiftComponent},
 { path: "addsecurity", component:AddsecurityComponent},
 { path: "home", component:HomeComponent},
 { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
