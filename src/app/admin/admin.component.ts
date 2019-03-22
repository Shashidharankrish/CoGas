import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as jQuery from 'jquery';
window['jQuery'] = jQuery;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/);


  constructor(private formBuilder: FormBuilder) { }
  AdminForm: FormGroup;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],      
      password: ['', [Validators.required, Validators.minLength(10)]]
  });
  }
  
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert(JSON.stringify(this.registerForm.value))
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
