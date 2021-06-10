import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Client } from '../Models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url  = "https://localhost:44304/api/client";
  constructor(private http:HttpClient) { }
  Login(phonNumber:string):Observable<number>
  {
   return this.http.get<number>(`${this.url}/login/${phonNumber}`)
  }
  SignUp(newClient: Client):Observable<number>
  {
    return this.http.post<number>(`${this.url}/insertclient` ,newClient);
  }
  AddNewClient(newClient:Client):Observable<number>
  {
      let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
      return this.http.post<number>(`${this.url}/addclient`,newClient);
  }
}
