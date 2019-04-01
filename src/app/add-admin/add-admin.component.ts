import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  public adminForm: FormGroup;
  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService,       // Form Builder service for Reactive forms
  ) {}
showSuccess(){
  this.toastr.success("Admin Added")
}
  ngOnInit() {
    this.crudApi.GetAdminsList();  // Call GetAdminsList() before main form is being called
    this.adminform();              // Call Admins form when component is ready
  }
adminform(){
  this.adminForm = this.fb.group({
    adminName: [''],
    email: [''],
    password: [''],
    phoneNumber: [''],
})
}

get adminName(){
  return this.adminForm.get('adminName');
}

get email(){
  return this.adminForm.get('email');
}

get password(){
  return this.adminForm.get('password');
}

get phoneNumber(){
  return this.adminForm.get('phoneNumber');
}

ResetForm(){
  this.adminForm.reset();
}
submitAdminData(){
this.crudApi.AddAdmin(this.adminForm.value);
this.toastr.success(this.adminForm.controls['adminName'].value + ' added successfully');
this.ResetForm();
}
}