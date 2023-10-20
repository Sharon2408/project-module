import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductDetails, Products } from 'src/models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  productsUrl = environment.productsUrl;

getProducts(): Observable<Products>{
  return this.http.get<Products>(this.productsUrl)
}
getCategories(): Observable<string[]>{
  return this.http.get<string[]>(this.productsUrl+'/categories')
}

viewSingleProduct(product_id:number): Observable<ProductDetails>{
  return this.http.get<ProductDetails>(this.productsUrl+'/'+ product_id)
}
}


