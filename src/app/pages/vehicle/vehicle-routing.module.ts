import { Routes, RouterModule } from "@angular/router";
import { VehicleComponent } from './vehicle.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: '',
    component: VehicleComponent,
    children: [
        {
            path: 'add-vehicle',
            component: AddVehicleComponent
        },
        {
            path: 'view-vehicle',
            component: ViewVehicleComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VehicleRoutingModule {
}