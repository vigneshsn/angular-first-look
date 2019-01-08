import { Routes, RouterModule } from '@angular/router'
import { DealsComponent } from './deals/deals.component';
import { DealsDetailComponent } from './deals/deals-detail/deals-detail.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'deals', pathMatch: 'full' },
            { path: 'deals', component: DealsComponent },
            { path: 'deals-detail/:id', component: DealsDetailComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}

export const DashboardRoutableComponents = [DashboardComponent, DealsComponent, DealsDetailComponent];