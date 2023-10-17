import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModuleModule } from './user-module/user-module.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './highlight.directive';
import { ChipsComponent } from './chips/chips.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HighlightDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModuleModule,
    BrowserAnimationsModule,
    ChipsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
