import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { LoginComponent } from './login/login.component';
import { AssignShiftComponent } from './assign-shift/assign-shift.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DeviceListComponent } from './device-list/device-list.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ShiftListComponent } from './shift-list/shift-list.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditShiftComponent } from './edit-shift/edit-shift.component';
import { EditSecurityComponent } from './edit-security/edit-security.component';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { SecurityListComponent } from './security-list/security-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddsecurityComponent,
    AddDeviceComponent,
    LoginComponent,
    AssignShiftComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    DeviceListComponent,
    EditDeviceComponent,
    AdminListComponent,
    AddAdminComponent,
    ShiftListComponent,
    EditAdminComponent,
    EditShiftComponent,
    EditSecurityComponent,
    AddShiftComponent,
    SecurityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
