import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HotelRoutingModule, HotelRoutableComponents } from './hotel-routing.module';
import {HotelService } from './hotel.service'
import { DiscountModule } from 'src/app/discount/discount.module';

@NgModule({
    declarations: [HotelRoutableComponents],
    imports: [CommonModule, HotelRoutingModule, DiscountModule],
    providers: [HotelService]
})
export class HotelsModule {}