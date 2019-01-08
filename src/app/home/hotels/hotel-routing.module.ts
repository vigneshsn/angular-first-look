import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { HotelReservationComponent } from './hotel-reservation/hotel-reservation.component';


const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full' },
    {path: 'list', component: HotelsComponent},
    {path: 'hotel-detail/:id', component: HotelReservationComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HotelRoutingModule {}

export const HotelRoutableComponents = [HotelsComponent, HotelReservationComponent ]