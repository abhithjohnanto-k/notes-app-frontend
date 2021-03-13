import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hidden: boolean = true;
  SignupForm: FormGroup;
  selectedDate : string;

  constructor(
    public _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.SignupForm = this.createFactory();
    console.log('this.loginForm', this.SignupForm)
  }
  createFactory() {
    return this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      emailid: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      dob: ['', Validators.required]
    })
  }

  createAccount(){
    console.log('signupForm', this.SignupForm.value)
  }
}
