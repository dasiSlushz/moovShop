import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { SelectShopComponent } from './Components/select-shop/select-shop.component';
import { SignupComponent } from './Components/signup/signup.component';

export const appRoutes: Routes = [

  { path:'signup',component:SignupComponent} ,
  { path:'select-shop',component:SelectShopComponent,pathMatch: 'full'} ,
  { path:'all-products',component:AllProductsComponent,pathMatch: 'full'} ,
  //{ path:'shopping',component:ShoppingComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
