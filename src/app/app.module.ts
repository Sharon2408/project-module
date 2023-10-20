import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from '../interceptors/http-interceptor.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModuleModule } from './user-module/user-module.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from '../directives/highlight.directive';
import { ChipsComponent } from '../directives/chips/chips.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsComponent } from './product-components/products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewSingleProductComponent } from './product-components/products/view-single-product/view-single-product.component';
import { ErrorPageComponent } from './error-page/error-page.component';

// Primeng
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ProductsComponent,
    NavbarComponent,
    ViewSingleProductComponent,
    ErrorPageComponent,
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
