import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    url  = "https://localhost:44304/api/product";
    constructor(private http:HttpClient) { }
    GetProductsByShop(codeShop:number):Observable<Product[]>
    {
      return this.http.get<Product[]>(`${this.url}/getProductForshop/${codeShop}`);
    }
    AddNewProduct(product:Product):Observable<number>
    {
        let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
        return this.http.post<number>(`${this.url}/addproduct`,product);
    }
  }
  
