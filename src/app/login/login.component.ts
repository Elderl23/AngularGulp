import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../service/validator/validation.service';

import { LoginService } from './login.service';
import { ClassGenerica} from '../config/config';



@Component({
  	selector: 'my-login',
    styleUrls: ['app/login/templates/login.component.css'],
  	templateUrl: 'app/login/templates/login.component.html',
})



export class LoginComponent extends ClassGenerica{
  model: any = {};
  showAlert: boolean = false;

  MsgAlert: string;

  userForm: any;

  constructor(
    private loginservice: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    super();

    this.userForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', [Validators.required, Validators.minLength(10)]],
      //'email': ['', [Validators.required, ValidationService.emailValidator]],
      //'profile': ['', [Validators.required, Validators.minLength(10)]]
    });

  } 


  login() {

    console.log(this.userForm);

    if (this.userForm.dirty && this.userForm.valid) {
      // console.log(this.userForm.value);

      super.loading(true);

      this.loginservice.login(this.userForm.value).subscribe(
            data => {
              this.router.navigate(['./dashboard']);
            },
            error => {
              this.MsgAlert = error;
              this.showAlert = true;
              super.loading(false);
            },
            () => super.loading(false)
       );
    }
  }

}
