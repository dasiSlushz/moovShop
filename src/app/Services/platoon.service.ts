import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../Models/product.model';
import { Platoon } from '../Models/platoon.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    url  = "https://localhost:44304/api/platoon";
    constructor(private http:HttpClient) { }
    GetPlatoonsByShop(codeShop:number):Observable<Platoon[]>
    {
      return this.http.get<Platoon[]>(`${this.url}/getPlatoonForshop/${codeShop}`);
    }
    AddNewProduct(product:Product):Observable<number>
    {
        let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
        return this.http.post<number>(`${this.url}/addproduct`,product);
    }
  }
  
