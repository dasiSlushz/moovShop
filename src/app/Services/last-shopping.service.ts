import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Client } from '../Models/client.model';
import { LastShopping } from '../Models/lastShopping.model';

@Injectable({
  providedIn: 'root'
})
export class LastShoppingService {
  url  = "https://localhost:44304/api/lastshopping";
  constructor(private http:HttpClient) { }
//get list of lastsShopping for client
  GetLastsShoppingForClient(codeClient:number):Observable<LastShopping[]>
  {
    return this.http.get<LastShopping[]>(`${this.url}/getLastsShoppingForClient/${codeClient}`);
  }
  //add lastsShopping for client
  AddLastShoppingForClient(lastshop:LastShopping):Observable<number>
  {
      let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
      return this.http.post<number>(`${this.url}/addlastshoppingforclient`,lastshop);
  }  
  //delete lastsShopping for client
   DeleteLastShoppingForClient(lastshop:LastShopping):Observable<number> { 
      return this.http.post<number>(`${this.url}/deletelastshop`,lastshop);
    } 

}

