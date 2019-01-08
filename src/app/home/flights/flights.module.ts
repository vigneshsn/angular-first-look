import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsRoutableComponent, FlightsRoutingComponent } from './flights-routing.module';

@NgModule({
  declarations: [FlightsRoutableComponent],
  imports: [
    CommonModule,
    FlightsRoutingComponent
  ]
})
export class FlightsModule { }
