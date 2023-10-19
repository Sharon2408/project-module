import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductDetails, Products } from 'src/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  productsUrl = environment.productsUrl;

getProducts(){
  return this.http.get<Products>(this.productsUrl)
}
getCategories(){
  return this.http.get<string[]>(this.productsUrl+'/categories')
}

viewSingleProduct(product_id:number){
  return this.http.get<ProductDetails>(this.productsUrl+'/'+ product_id)
}
}


