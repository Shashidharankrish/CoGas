import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { HomeComponent } from './home/home.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditShiftComponent } from './edit-shift/edit-shift.component';
import { ShiftListComponent } from './shift-list/shift-list.component';
import { SecurityListComponent } from './security-list/security-list.component';
import { EditSecurityComponent } from './edit-security/edit-security.component';

const routes: Routes = [
 { path: "add-device", component:AddDeviceComponent},
 { path:"device-list",component:DeviceListComponent},
 { path:"edit-device/:id",component:EditDeviceComponent},
 { path: "add-admin", component:AddAdminComponent},
 { path: "admin-list", component:AdminListComponent},
 { path: "edit-admin/:id", component:EditAdminComponent},
 { path: "add-shift", component:AddShiftComponent},
 { path: "edit-shift/:id", component:EditShiftComponent},
 { path: "shift-list", component:ShiftListComponent},
 { path: "assignment", component:AssignmentComponent},
 { path: "addsecurity", component:AddsecurityComponent},
 { path: "security-list", component:SecurityListComponent},
 { path: "edit-security/:id", component:EditSecurityComponent},
 { path: "home", component:HomeComponent},
 { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
