import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { AssignShiftComponent } from './assign-shift/assign-shift.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { HomeComponent } from './home/home.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { AddShiftComponent } from './add-shift/add-shift.component';

const routes: Routes = [
 { path:"device-list",component:DeviceListComponent},
 { path:"edit-device/:id",component:EditDeviceComponent},
 { path: "admin-list", component:AdminListComponent},
 { path: "add-admin", component:AddAdminComponent},
 { path: "add-device", component:AddDeviceComponent},
 { path: "assignshift", component:AssignShiftComponent},
 { path: "addsecurity", component:AddsecurityComponent},
 { path: "home", component:HomeComponent},
<<<<<<< HEAD
 { path: "add-shift", component:AddShiftComponent},
 { path: '', redirectTo: '/home', pathMatch: 'full'},
=======
 { path: '', redirectTo: 'home', pathMatch: 'full'},
>>>>>>> d771ca5ef3b994267b3cf06c1915a533ec939339
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
