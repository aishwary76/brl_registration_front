import { RegisterService } from './register.service';
import { Component } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms' ;
import { Validators } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private registerService: RegisterService,
             ) {

  }

userprofileForm = new FormGroup
({
  name: new FormControl('', Validators.required),
  hosteler: new FormControl('', Validators.required),
  roll_no: new FormControl('', Validators.required),
  branch: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  year: new FormControl('', Validators.required),
  percentage: new FormControl('', Validators.required),
  attendance: new FormControl('' , Validators.required),
  mobile_no: new FormControl('',  [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
});



get name() {
  return this.userprofileForm.get('name');
}

get hostele() {
  return this.userprofileForm.get('hosteler');
}
get roll_no() {
  return this.userprofileForm.get('roll_no');
}

get branch() {
  return this.userprofileForm.get('branch');
}
get email() {
  return this.userprofileForm.get('email');
}

get year() {
  return this.userprofileForm.get('year');
}

get percentage() {
  return this.userprofileForm.get('percentage');
}

get attendance() {
  return this.userprofileForm.get('attendance');
}
get mobile_no() {
  return this.userprofileForm.get('mobile_no');
}

onSubmit() {
  try {
  console.log(this.userprofileForm);
  this.registerService.postregister(this.userprofileForm.value)
  .subscribe( s => {
    console.log('form submitted');
  });
} catch (err) {
  console.log('form not submitted ', err);
}
}
}
