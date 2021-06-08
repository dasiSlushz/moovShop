import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  subscribe: any;
  products:Product[] ;
  constructor(private productService:ProductService, private router:Router, private route:ActivatedRoute,) {
   productService.GetPlatoonsByShop(1).subscribe((list:Product[])=>
   {
     this.products=list;;
   });
 
  }
  ngOnInit(): void {
  }
  }
