import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

constructor(private productService:ProductService){}

categories: string[] =[];

ngOnInit(): void {
  this.productService.getCategories().subscribe({
    next: (res)=>{
      this.categories = res
    },
    error: (errors)=>{

    }
  })
}

}
