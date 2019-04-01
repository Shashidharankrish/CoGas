import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-security',
  templateUrl: './edit-security.component.html',
  styleUrls: ['./edit-security.component.scss']
})
export class EditSecurityComponent implements OnInit {
  editForm: FormGroup;  // Define FormGroup to Security's edit form
  constructor(
    private crudApi: CrudService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ) { }

  ngOnInit() {
    this.updateSecuritysData();   // Call updateSecurityData() as soon as the component is ready 
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.crudApi.Getsecurity(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data)  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
    })
  }
 // Accessing form control using getters
 get SecurityName() {
  return this.editForm.get('securityName');
}

get SecurityType() {
  return this.editForm.get('phoneNumber');
}

get count() {
  return this.editForm.get('count');
}

get availability() {
  return this.editForm.get('availability');
}  

// Contains Reactive Form logic
updateSecuritysData() {
  this.editForm = this.fb.group({
    securityName: [''],
    phoneNumber: [''],
    availability: [''],
    count: ['']
  })
}

// Go back to previous component
goBack() {
  this.location.back();
}

// Below methods fire when somebody click on submit button
updateSecurityForm(){
  this.crudApi.UpdateSecurity(this.editForm.value);       // Update Security data using CRUD API
  this.toastr.success(this.editForm.controls['securityName'].value + ' updated successfully');   // Show succes message when data is successfully submited
  this.router.navigate(['security-list']);               // Navigate to Security's list page when Security data is updated
}

}
