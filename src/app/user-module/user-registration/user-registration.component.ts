import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { matchValidator } from 'src/shared/confirm-password';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})

export class UserRegistrationComponent implements OnInit {
  signupForm!: FormGroup;
  firstName!: FormControl;
  email!: FormControl;


  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]{3,}$/),
    ]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.signupForm = new FormGroup({
      firstname: this.firstName,
      email: this.email,
    });
  }

  onSubmit() {}
}


