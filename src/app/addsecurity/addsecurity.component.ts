import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.scss']
})
export class AddsecurityComponent implements OnInit {
  public securityForm: FormGroup;
  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService,       // Form Builder service for Reactive forms
  ) {}
showSuccess(){
  this.toastr.success("Security Added")
}
  ngOnInit() {
    this.crudApi.GetSecuritiesList();  // Call GetDevicesList() before main form is being called
    this.securityform();              // Call Devices form when component is ready
  }
securityform(){
  this.securityForm = this.fb.group({
    securityName: [''],
    phoneNumber: [''],
    count: [''],
    availability: [''],
})
}

get securityName(){
  return this.securityForm.get('securityName');
}

get phoneNumber(){
  return this.securityForm.get('phoneNumber');
}

get securityAvailability(){
  return this.securityForm.get('availability');
}

get securityCount(){
  return this.securityForm.get('count');
}

ResetForm(){
  this.securityForm.reset();
}
submitSecurityData(){
this.crudApi.AddSecurity(this.securityForm.value);
this.ResetForm();
}
}