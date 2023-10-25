import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductService } from 'src/services/getProduct.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public productService: ProductService,private router:Router) {}

  categories: string[] = [];
  

  ngOnInit(): void {
    this.productService.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (errors) => {},
    });
  }

  getCategory(category: string) {
     this.router.navigate(['category',category])
  }
}
