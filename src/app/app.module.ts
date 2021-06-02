import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './Components/client/client.component';
import { HttpClientModule} from '@angular/common/http';
import { SelectShopComponent } from './Components/select-shop/select-shop.component';
import { ProductsComponent } from './Components/products/products.component';
import { ListShoppingComponent } from './Components/list-shopping/list-shopping.component';
import { GoogleMapsComponent } from './Components/google-maps/google-maps.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    SelectShopComponent,
    ProductsComponent,
    ListShoppingComponent,
    GoogleMapsComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
