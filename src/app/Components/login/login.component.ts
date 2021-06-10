import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogIn } from 'src/app/Models/LogIn.model';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logIn:LogIn
  constructor(private clientService:ClientService , private router:Router) { }
  ngOnInit(): void {
  }
  enter(frm:any){
   
    this.clientService.Login(this.logIn.phonNumber).subscribe(CodeClient=>
      {
      if(CodeClient!=0)
       {
       // sessionStorage.setItem('companyId',companyId.toString())
         this.router.navigate(['select-shop',CodeClient]);
       }
       else
       this.router.navigate(['signup']);
    })
  }

}
