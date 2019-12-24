import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { TranslationService } from "../../shared/translation.service";
import { AppConst } from "../../shared/constant";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  appTitle = AppConst.appName;
  show: boolean = false;
  constructor(public translate: TranslationService,
    private fb: FormBuilder) { }

  ngOnInit() {
    //signup form
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  onSignUp() {

  }

  togglePassword() {
    this.show = !this.show;
  }
}
