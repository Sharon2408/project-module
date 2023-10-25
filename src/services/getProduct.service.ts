import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductDetails, Products } from 'src/models/products';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // Products Api Link from environment file
  productsUrl = environment.productsUrl;
  
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

// To get all The products from the api to the products Component
  getProducts(): Observable<Products> {
    return this.http.get<Products>(`${this.productsUrl}`);
  }
  // To get all the categories in the category dropdown in navbar Component 
  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.productsUrl}/categories`);
  }

// To View a single product by Id in the single view prouct Component
  viewSingleProduct(product_id: number): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(`${this.productsUrl}/${product_id}`);
  }

// To Display  Products Category wise in the Products Component
  getProductCategoryWise(categoryName: string): Observable<Products> {
    return this.http.get<Products>(`${this.productsUrl}/category/${categoryName}`);
  }

  // Search functionality of Products according to search string passed from Products Component
  searchProducts(searchString: string): Observable<Products> {
    let params = new HttpParams();
    params = params.append('q', searchString);
    console.log(searchString);
    return this.http.get<Products>(`${this.productsUrl}/search`,{params:params});
  }
}
