import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.scss']
})
export class AddAssignmentComponent implements OnInit {
  public assignmentForm: FormGroup;
  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService,       // Form Builder service for Reactive forms
  ) {}
showSuccess(){
  this.toastr.success("Assignment Added")
}
  ngOnInit() {
    this.crudApi.GetAssignmentsList();  // Call GetDevicesList() before main form is being called
    this.assignmentform();              // Call Devices form when component is ready
  }
assignmentform(){
  this.assignmentForm = this.fb.group({
    deviceName: [''],
    shiftName: [''],
    securityName: ['']
})
}

get deviceName(){
  return this.assignmentForm.get('deviceName');
}

get shiftName(){
  return this.assignmentForm.get('shiftName');
}

get securityName(){
  return this.assignmentForm.get('securityName');
}

ResetForm(){
  this.assignmentForm.reset();
}
submitAssignmentData(){
this.crudApi.AddAssignment(this.assignmentForm.value);
this.toastr.success(this.assignmentForm.controls['deviceName'].value + ' Assinment added successfully');
this.ResetForm();
}
}