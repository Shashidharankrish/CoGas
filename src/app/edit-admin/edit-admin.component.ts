import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})

export class EditAdminComponent implements OnInit {
  editForm: FormGroup;  // Define FormGroup to device's edit form
  
  constructor(
    private crudApi: CrudService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ){ }

  ngOnInit() {
    this.updateAdminData();   // Call updateDeviceData() as soon as the component is ready 
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.crudApi.Getadmin(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data)  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
    })
  }

  // Accessing form control using getters
  get adminName() {
    return this.editForm.get('adminName');
  }

  get email() {
    return this.editForm.get('email');
  }

  get password() {
    return this.editForm.get('password');
  }

  get phoneNumber() {
    return this.editForm.get('phoneNumber');
  }  

  // Contains Reactive Form logic
  updateAdminData() {
    this.editForm = this.fb.group({
      adminName: [''],
      email: [''],
      password: [''],
      phoneNumber: ['']
    })
  }

  // Go back to previous component
  goBack() {
    this.location.back();
  }

  // Below methods fire when somebody click on submit button
  updateForm(){
    this.crudApi.UpdateAdmin(this.editForm.value);       // Update Device data using CRUD API
    this.toastr.success(this.editForm.controls['adminName'].value + ' updated successfully');   // Show succes message when data is successfully submited
    this.router.navigate(['./admin-list']);               // Navigate to Device's list page when Device data is updated
  }

}
