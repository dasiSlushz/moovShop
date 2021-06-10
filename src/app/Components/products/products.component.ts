import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product:Product;
  @Output() addCar = new EventEmitter<{product1:Product}>();

  onAddCar(data:Product){
    console.log(data)
    this.addCar.emit({
      product1:data
   
    });
    console.log(this.product)
  }
  constructor() { 
    
  }

 
  ngOnInit(): void {
  }

}
