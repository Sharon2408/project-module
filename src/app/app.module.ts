import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from '../interceptors/http-interceptor.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModuleModule } from './user-module/user-module.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChipsComponent } from '../directives/chips/chips.component';
import { ProductsComponent } from './product-components/products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewSingleProductComponent } from './product-components/view-single-product/view-single-product.component';
import { ErrorPageComponent } from './error-page/error-page.component';

// MatUi
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

// Primeng
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ViewProductCaegoryWiseComponent } from './product-components/view-product-category-wise/view-product-caegory-wise.component';
import { FormsModule } from '@angular/forms';
// Directives
import { HighlightDirective } from '../directives/highlight.directive';
import { BackButtonDirective } from '../directives/back-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ProductsComponent,
    NavbarComponent,
    ViewSingleProductComponent,
    ErrorPageComponent,
    ViewProductCaegoryWiseComponent,
    BackButtonDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModuleModule,
    BrowserAnimationsModule,
    ChipsComponent,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ToastModule,
    MatProgressBarModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
