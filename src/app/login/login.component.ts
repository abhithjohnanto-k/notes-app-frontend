import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidden: boolean = true;
  loginForm: FormGroup;

  constructor(
    public _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.createFactory();
    console.log('this.loginForm',this.loginForm)
  }
  createFactory() {
    return this._formBuilder.group({
      emailid: ['', [Validators.required, Validators.email]],
      password: ['',Validators.required]
    })
  }

}
