import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { find } from 'rxjs';
import { RegisterService } from 'src/services/register.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
  constructor(private register: RegisterService) {}

  signupForm!: FormGroup;
  firstName!: FormControl;
  email!: FormControl;
  food: string[] = ['Burger', 'Pizza'];
  selectedFood: string[] = [];

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

  addItem(newItem: string) {
    if (!this.selectedFood.includes(newItem)) {
      this.selectedFood.push(newItem);
    } 
  }

  removeFood(removeFood: string) {
    const index = this.selectedFood.indexOf(removeFood);
    if (index >= 0) {
      this.selectedFood.splice(index, 1);
    }
  }

  onSubmit() {
    this.signupForm.value.food = this.selectedFood;
    return this.register.register(this.signupForm.value);
  }
}
