import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetails, Products } from 'src/models/products';
import { ProductService } from 'src/services/getProduct.service';

@Component({
  selector: 'app-view-product-caegory-wise',
  templateUrl: './view-product-category-wise.component.html',
  styleUrls: ['./view-product-category-wise.component.css'],
})
export class ViewProductCaegoryWiseComponent implements OnInit {
  categoryName?: string|any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router:Router
  ) {}
  public productList: ProductDetails[] = [];
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((queryParams) => {
      this.categoryName = queryParams.get('categoryName');
      this.productService.getProductCategoryWise(this.categoryName).subscribe({
        next: (res) => {
          this.productList = res.products;
        },
      });
    });
  }
  viewSingleProduct(id: number) {
    this.router.navigate(['/single-product',id]);
 }
}
