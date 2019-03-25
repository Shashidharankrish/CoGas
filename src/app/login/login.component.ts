import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router) { }
  LoginForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      Name: ['', Validators.required],     
      password: ['', [Validators.required, Validators.minLength(10)]]
  });
  }
  get f() { return this.LoginForm.controls; }
  login(){
  
  }
  onSubmit() {
    this.submitted = true;
    this.router.navigate(['./assignShift']);
  
    // stop here if form is invalid
    if (this.LoginForm.invalid) {
        return;
    }
  }
}
