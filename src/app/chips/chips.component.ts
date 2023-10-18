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
  templateUrl: './chips.component.html',
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
