import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/client.model';
import { ClientService } from 'src/app/Services/client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private ClientService:ClientService , private router:Router) {  }
 newClient:Client = new Client();
  ngOnInit(): void {
  }
  SignUp(frm:any)
  {
    this.ClientService.SignUp(this.newClient).subscribe(CodeClient => {this.newClient.CodeClient =CodeClient;
    sessionStorage.setItem('CodeClient',CodeClient.toString());
})
  }

  selectShop()
  {
    console.log('1111');
    this.router.navigate(['select-shop',this.newClient.CodeClient]);
    console.log('2222');
  }
  
}
