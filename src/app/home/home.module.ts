import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule, HomeRoutableComponents } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, HomeRoutableComponents],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
