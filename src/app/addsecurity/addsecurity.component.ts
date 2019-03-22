import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as jQuery from 'jquery';
window['jQuery'] = jQuery;

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.scss']
})
export class AddsecurityComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/);
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      phoneNumber: ['', [Validators.required]]
  });
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
