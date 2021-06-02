import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/client.model';
import { ClientService } from 'src/app/Services/client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent{
  constructor(private ClientService:ClientService , private router:Router,) {  }
 newClient:Client = new Client();
  ngOnInit(): void {
  }
  SignUp(frm:any)
  {
    this.ClientService.SignUp(this.newClient).subscribe(CodeClient => {this.newClient.CodeClient =CodeClient;
    sessionStorage.setItem('CodeClient',CodeClient.toString());
})


 
  }
  /*
  selectShop()
  {
    console.log('1111');
    this.router.navigate(['/select-shop']);
    console.log('2222');
  }
  
  */
}
