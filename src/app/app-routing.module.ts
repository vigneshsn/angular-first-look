import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealsComponent } from './deals/deals.component';
import { DealsDetailComponent } from './deals/deals-detail/deals-detail.component';
import { FlightsComponent } from './flights/flights.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'deals'},
  {path: 'deals', component: DealsComponent },
  {path: 'deals/:id', component: DealsDetailComponent },
  {path: 'flights', component: FlightsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
