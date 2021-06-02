import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Client } from '../Models/client.model';
import { Shop } from '../Models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  url  = "https://localhost:44304/api/shop";
  constructor(private http:HttpClient) { }
  //Add
  AddShop(newshop:Shop):Observable<number>
  {
      let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
      return this.http.post<number>(`${this.url}/addshop`,newshop);
  }
  //Delete
  DeleteShop(shopToDelete:Shop):Observable<number> { 
      return this.http.post<number>(`${this.url}/deleteshop`,shopToDelete);
    } 
//UpDate
  UpdateShop(shopToUpdate:Shop):Observable<number>
{
    let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
    return this.http.post<number>(`${this.url}/updateshop`,shopToUpdate);
}

}
