import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/models/products';
import { ProductService } from 'src/services/getProduct.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  products: ProductDetails[] = [];
  singleProductUrl = environment.productsUrl;
  searchString!: string;

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
      },
      error: (errors) => {
        if(errors.status == 404){
          console.log('Error happened in viewing single product');
          this.router.navigate(['/error'])
        }
        else if(errors.status == 500){
          console.log('Internal server error')
        }
      },
    });
  }

  viewSingleProduct(id: number) {
    this.router.navigate(['/single-product', id]);
  }

  search(searchString: string) {
    if (!searchString) {
      return this.products;
    }
    return this.productService.searchProducts(searchString).subscribe({
      next: (res) => {
        this.products = res.products;
        console.log(res)
      },
      error: ()=>{

      }
    });
  }
}
