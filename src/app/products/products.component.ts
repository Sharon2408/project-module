import { Component, OnInit } from '@angular/core';
import { ProductDetails, Products } from 'src/models/products';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: Products[] = [];

ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next: (res) => {
      this.products = res.products;
      console.log(res)
    },
    error: (errors) =>{
      console.log(errors)
    }
  });
} 
}
