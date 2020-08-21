import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  age: FormControl;

  // TODO 1
  email: FormControl;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.age = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]);
    // TODO 2
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.userForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      email: this.email // TODO 3
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      this.submitted = true;
    }
  }
}
