import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-list-shopping',
  templateUrl: './list-shopping.component.html',
  styleUrls: ['./list-shopping.component.css']
})
export class ListShoppingComponent implements OnInit {

 constructor(){
 }

  ngOnInit()
  {
  }

  
}