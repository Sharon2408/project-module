import { Component, EventEmitter, Input, Output,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectChange, MatSelectModule, } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {  MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';



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
    MatCheckboxModule,MatAutocompleteModule,
    
  ],
  template: `<mat-chip-listbox>
  <mat-chip *ngFor="let food of selectedFood" (removed)="remove(food)">
    {{food}}
    <button matChipRemove>
      <mat-icon>cancel</mat-icon>
    </button>
  </mat-chip>
</mat-chip-listbox>
<mat-form-field class="example-full-width">
  <mat-label>Select Food</mat-label>
  <mat-select [formControl]="topping" (selectionChange)="selected($event)">

    <mat-option *ngFor="let food of food" [value]="food">{{food}}</mat-option>
  </mat-select>
  <mat-error *ngIf="topping.hasError('required')">
    Food is required</mat-error>
</mat-form-field>`,

  styleUrls: ['./chips.component.css'],
})
export class ChipsComponent {

@Input() food:string[] = [];
@Input() selectedFood:string[] = [];
@Output() selectedFoodEvent = new EventEmitter<string>();
@Output() removeFoodEvent = new EventEmitter<string>(); 

  topping = new FormControl('',[Validators.required]);

  remove(food: string) {
    this.removeFoodEvent.emit(food);
  }
  
  selected(event: MatSelectChange): void {
    this.selectedFoodEvent.emit(event.value);  
  }

}
