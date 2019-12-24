import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { TranslationService } from "../../shared/translation.service";
import { AppConst } from "../../shared/constant";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  appTitle = AppConst.appName;
  show: boolean = false;
  constructor(public translate: TranslationService,
    public fb: FormBuilder,
    public router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) return this.router.navigate(['/app']);
  }

  togglePassword() {
    this.show = !this.show;
  }
}
