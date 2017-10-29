import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  public schools: any[];
  public loginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {

    this.loginService.getSchools()
      .subscribe((next) => {
        this.schools = next;
      });

    this.loginForm = this.formBuilder.group({
      school: ['', Validators.required],
      group: ['', Validators.required],
      student: ['', Validators.required]
    });
  }
}
