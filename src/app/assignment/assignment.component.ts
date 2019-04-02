import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Admins } from '../shared/admins';   // admin interface class for Data types.
import { Devices } from '../shared/devices';   // Device interface class for Data types.
import { Shifts } from '../shared/shifts';   // Shift interface class for Data types.
import { Securities } from '../shared/securities'; // Securities interface class for Data types.
import { Assignments } from '../shared/assignments';
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  Device: Devices[];
  Security: Securities[];
  Admin: Admins[];
  Shift: Shifts[];
  Assignment: Assignments[];
  hideWhenNoAssignment: boolean = false;
  hideWhenNoAdmin: boolean = false;
  hideWhenNoDevice: boolean = false;
  hideWhenNoShift: boolean = false;
  hideWhenNoSecurity: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    public crudApi: CrudService, // Inject Admin CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
  ) { }

  ngOnInit() {

    this.dataState(); // Initialize Admin's list, when component is ready
    let a = this.crudApi.GetAdminsList();
    let d = this.crudApi.GetDevicesList();
    let s = this.crudApi.GetSecuritiesList();
    let sh = this.crudApi.GetShiftsList();
    let ass = this.crudApi.GetAssignmentsList();
    a.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Admin = [];
      data.forEach(adminItem => {
        let a = adminItem.payload.toJSON();
        a['$key'] = adminItem.key;
        this.Admin.push(a as Admins);
      })
    })
    d.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)  
      this.Device = [];
      data.forEach(deviceItem => {
        let d = deviceItem.payload.toJSON();
        d['$key'] = deviceItem.key;
        this.Device.push(d as Devices);
      })
    })
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)  
      this.Security = [];
      data.forEach(securityItem => {
        let s = securityItem.payload.toJSON();
        s['$key'] = securityItem.key;
        this.Security.push(s as Securities);
      })
    })
    sh.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)  
      this.Shift = [];
      data.forEach(shiftItem => {
        let sh = shiftItem.payload.toJSON();
        sh['$key'] = shiftItem.key;
        this.Shift.push(sh as Shifts);
      })
    })
    ass.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)  
      this.Assignment = [];
      data.forEach(assignmentItem => {
        let ass = assignmentItem.payload.toJSON();
        ass['$key'] = assignmentItem.key;
        this.Assignment.push(ass as Assignments);
      })
    })
  }
  dataState() {
    this.crudApi.GetAdminsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoAdmin = false;
        this.noData = true;
      } else {
        this.hideWhenNoAdmin = true;
        this.noData = false;
      }
    })
    this.crudApi.GetSecuritiesList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoSecurity = false;
        this.noData = true;
      } else {
        this.hideWhenNoSecurity = true;
        this.noData = false;
      }
    })
    this.crudApi.GetDevicesList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if ( data.length <= 0) {
        this.hideWhenNoDevice = false;
        this.noData = true;
      } else {
        this.hideWhenNoDevice = true;
        this.noData = false;
      }
    })
    this.crudApi.GetShiftsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoShift = false;
        this.noData = true;
      } else {
        this.hideWhenNoShift = true;
        this.noData = false;
      }
    })
    this.crudApi.GetAssignmentsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <=0){
        this.hideWhenNoAssignment = false;
        this.noData = true;
      } else {
        this.hideWhenNoAssignment = true;
        this.noData = false;
      }
    })
  }
}
