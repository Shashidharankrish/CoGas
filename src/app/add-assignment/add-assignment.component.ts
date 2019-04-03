import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr';
import { Admins } from '../shared/admins';   // admin interface class for Data types.
import { Devices } from '../shared/devices';   // Device interface class for Data types.
import { Shifts } from '../shared/shifts';   // Shift interface class for Data types.
import { Securities } from '../shared/securities'; // Securities interface class for Data types.
import { Assignments } from '../shared/assignments';
import { containsElement } from '@angular/animations/browser/src/render/shared';
import { forEach } from '@angular/router/src/utils/collection';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.scss']
})
export class AddAssignmentComponent implements OnInit {
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
  public assignmentForm: FormGroup;

  constructor(
    public crudApi: CrudService, // Inject Admin CRUD services in constructor.
    public fb: FormBuilder,
    public toastr: ToastrService // Toastr service for alert message
  ) { }
  assignmentform(){
    this.assignmentForm = this.fb.group({
      deviceName: [''],
      securityName: [''],
      shiftName: ['']
  })
  }
  ngOnInit() {

    this.assignmentform();
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
  submitAssignmentData(){
    this.crudApi.AddAssignment(this.assignmentForm.value)
    this.check();
  }
  

  check(){
    for(let i=0; i<=this.Device.length;i++){
      if(this.Device[i].deviceName===this.Assignment[i].deviceName){
          console.log(this.Assignment[i].deviceName, this.Device[i].deviceName);
      }
    }
  }
}