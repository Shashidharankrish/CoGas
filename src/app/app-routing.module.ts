import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignShiftComponent } from './assign-shift/assign-shift.component';
import { AdminComponent } from './admin/admin.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { Addsecurity, AddsecurityComponent } from './addsecurity/addsecurity.component';


const routes: Routes = [
 { path:"assignShift",component:AssignShiftComponent},
 { path: "admin", component:AdminComponent},
 { path: "add-device", component:AddDeviceComponent},
 { path: "assignshift", component:AssignShiftComponent},
 { path: "addsecurity", component:AddsecurityComponent},
 { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
