import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  public deviceForm: FormGroup;
  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService,       // Form Builder service for Reactive forms
  ) {}
showSuccess(){
  this.toastr.success("Device Added")
}
  ngOnInit() {
    this.crudApi.GetDevicesList();  // Call GetDevicesList() before main form is being called
    this.deviceform();              // Call Devices form when component is ready
  }
deviceform(){
  this.deviceForm = this.fb.group({
    deviceName: [''],
    deviceType: [''],
    count: [''],
    availability: [''],
})
}

get deviceName(){
  return this.deviceForm.get('deviceName');
}

get deviceType(){
  return this.deviceForm.get('deviceType');
}

get deviceCount(){
  return this.deviceForm.get('count');
}

get deviceAvailability(){
  return this.deviceForm.get('availability');
}

ResetForm(){
  this.deviceForm.reset();
}
submitDeviceData(){
this.crudApi.AddDevice(this.deviceForm.value);
this.ResetForm();
}
}