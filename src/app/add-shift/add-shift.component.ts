import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.scss']
})
export class AddShiftComponent implements OnInit {
  public shiftForm: FormGroup;

  constructor(public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService, ) { }
    showSuccess(){
      this.toastr.success("shift Added");
    }
  ngOnInit() {
    this.crudApi.GetShiftsList();  // Call GetDevicesList() before main form is being called
    this.shiftform(); 
  }
shiftform(){
    this.shiftForm = this.fb.group({
      shiftName: [''],
      count: [''],
      availability: [''],
  });
  }
  get shiftName(){
    return this.shiftForm.get('shiftName');
  }
  
  get shiftCount(){
    return this.shiftForm.get('count');
  }
  
  get shiftAvailability(){
    return this.shiftForm.get('availability');
  }
  
  ResetForm(){
    this.shiftForm.reset();
  }
  submitShiftData(){
  this.crudApi.AddShift(this.shiftForm.value);
  this.shiftForm.controls['shiftName'].value + ' added successfully';
  this.ResetForm();
  }
}
