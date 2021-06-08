import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product:Product;
  constructor(p:Product) { 
       this.product = p;
  }


  ngOnInit(): void {
  }

}
