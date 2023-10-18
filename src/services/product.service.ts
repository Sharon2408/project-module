import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  productsUrl = environment.productsUrl;

getProducts(){
  return this.http.get<any>(this.productsUrl)
}

}


