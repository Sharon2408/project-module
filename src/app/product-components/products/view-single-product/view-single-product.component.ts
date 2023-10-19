import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetails } from 'src/models/products';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-view-single-product',
  templateUrl: './view-single-product.component.html',
  styleUrls: ['./view-single-product.component.css'],
})
export class ViewSingleProductComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router:Router
  ) {}

  productId!: number;
  singleProduct: ProductDetails = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  };

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    this.productId = Number(routeParams.get('product_id'));
    this.productService.viewSingleProduct(this.productId).subscribe({
      next: (res) => {
        this.singleProduct = res;
        console.log(res);
      },
      error: (error) => {
        if(error.status == 404){
          console.log('Error happened in viewing single product');
          this.router.navigate(['/error'])
        }
        else if(error.status == 500){
          console.log('Internal server error')
        }
      },
    });
  }
}
