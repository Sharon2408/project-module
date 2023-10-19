import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './product-components/products/products.component';
import { ViewSingleProductComponent } from './product-components/products/view-single-product/view-single-product.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [

  {
    path:'product',component:ProductsComponent
  },
  {
    path:'single-product/:product_id',component:ViewSingleProductComponent
  },
  {
    path:'error',component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
