import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Platoon } from '../Models/platoon.model';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url  = "https://localhost:44304/api/product";
  constructor(private http:HttpClient) { }
  GetProductsByPlatoons(platoons:Platoon[]):Observable<Product[]>
  {
    return this.http.get<Product[]>(`${this.url}/getProductsForshop/${platoons}`);
  }
  AddNewProduct(product:Product):Observable<number>
  {
      let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
      return this.http.post<number>(`${this.url}/addproduct`,product);
  }
  
}
