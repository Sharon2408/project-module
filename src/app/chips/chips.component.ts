import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { LiveAnnouncer } from '@angular/cdk/a11y';


@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatCheckboxModule,MatAutocompleteModule
  ],
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
})
export class ChipsComponent {
  food: string[] = ['Pizza', 'Burger', 'Bhel'];
  topping = new FormControl('')
  selectedFood: string[] = [];
 

  remove(food: string) {
    const index = this.selectedFood.indexOf(food);
    if (index >= 0) {
      this.selectedFood.splice(index, 1);
    }
  }
  
  selected(event: MatSelectChange): void {
    this.selectedFood.push(event.value);
    
  }
}
