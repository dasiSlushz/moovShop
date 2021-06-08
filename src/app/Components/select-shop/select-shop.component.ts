import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-shop',
  templateUrl: './select-shop.component.html',
  styleUrls: ['./select-shop.component.css']
})
export class SelectShopComponent implements OnInit {

  constructor(private router:Router) { }
codeshop = 1
  ngOnInit(): void {
    console.log("dfgjhgf")
  }
  allProducts()
  {
    console.log('1111');
    this.router.navigate(['all-products',this.codeshop]);
    console.log('2222');
  }
}
