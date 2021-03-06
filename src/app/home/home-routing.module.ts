import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';


const routes: Routes = [
    {
        path: '', component: HomeComponent, 
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'flights', loadChildren: './flights/flights.module#FlightsModule' },
            { path: 'hotels', loadChildren: './hotels/hotels.module#HotelsModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}

export const HomeRoutableComponents = [HomeComponent];