import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Platoon } from 'src/app/Models/platoon.model';
import { Product } from 'src/app/Models/product.model';
import { PlatoonService } from 'src/app/Services/platoon.service';
import { ProductService } from 'src/app/Services/product.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

  @Output() addCar = new EventEmitter<{model:string, price:number}>();

 fillShoppingCart(item:{product:Product})
 {
  console.log('fffff')
    
   
    //this.products.push(data);
      console.log(item)
 }
  constructor(private platoonService:PlatoonService, private router:Router,private productService:ProductService) {}

  subscribe: any;
  platoons:Platoon[] ;
  
  products=[{
    CodeProduct:2,
    NameProduct:"leben",
    DescriptionProduct:"ddddd",
    LocationProductX:555,
    LocationProductY:5555,
    CodePlatoon:1
   },{
    CodeProduct:1,
    NameProduct:"milk",
    DescriptionProduct:"ddddd",
    LocationProductX:555,
    LocationProductY:5555,
    CodePlatoon:1
   }];
  
 
  
  ngOnInit(): void {
  }
fillProducts()
{
  this.platoonService.GetPlatoonsByShop(1).subscribe((list:Platoon[])=>
  {
    this.platoons=list;;
  });
  
  this.productService.GetProductsByPlatoons(this.platoons).subscribe((list:Product[])=>
{
  this.products=list;;
});
 }
}
