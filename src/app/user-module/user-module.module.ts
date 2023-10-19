import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ChipsComponent } from '../../directives/chips/chips.component';



@NgModule({
  declarations: [
    UserRegistrationComponent,
    UserLoginComponent,
    
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    ChipsComponent,
  ]
})
export class UserModuleModule { }
