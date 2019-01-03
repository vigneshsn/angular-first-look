import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
//import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
//import { HotelRoutingModule } from './hotels/hotel-routing.module';
import { AppComponent } from './app.component';
import {UserService} from './shared/user.service';
import { DealsComponent } from './deals/deals.component';
import { FlightsComponent } from './flights/flights.component';
//import { HotelsComponent } from './hotels/hotels.component';
import { DealsDetailComponent } from './deals/deals-detail/deals-detail.component';
//import { HotelReservationComponent } from './hotels/hotel-reservation/hotel-reservation.component';
//import { DiscountComponent } from './discount/discount.component';
import { HotelsModule } from './hotels/hotels.module';

@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    FlightsComponent,
    //HotelsComponent,
    DealsDetailComponent
    //HotelReservationComponent,
    //DiscountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   // FormsModule,
    AppRoutingModule,
    HotelsModule
   // HotelRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
