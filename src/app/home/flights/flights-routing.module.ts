import { Routes, RouterModule} from '@angular/router';
import { FlightsComponent } from './flights.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: '', component: FlightsComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FlightsRoutingComponent {
};

export const FlightsRoutableComponent = [FlightsComponent];