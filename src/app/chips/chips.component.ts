import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
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
  ],
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
})
export class ChipsComponent {
  toppingList: string[] = ['Pizza', 'Burger', 'Bhel'];
  food: string[] = [];
  announcer = inject(LiveAnnouncer);

  remove(food: string) {
    const index = this.food.indexOf(food);

    if (index >= 0) {
      this.food.splice(index, 1);

      this.announcer.announce(`Removed ${food}`);
    }
  }
  selected(value:string): void {
    this.food.push(value);
    console.log(value);
    console.log(this.food)
  }
}
