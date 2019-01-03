import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HotelRoutingModule, HotelRoutableComponents } from './hotel-routing.module';
import { DiscountModule } from '../discount/discount.module';

@NgModule({
    declarations: [HotelRoutableComponents],
    imports: [CommonModule, HotelRoutingModule, DiscountModule]
    //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HotelsModule {}