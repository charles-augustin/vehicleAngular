import { Routes, RouterModule } from "@angular/router";
import { VehicleComponent } from './vehicle.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { NgModule } from '@angular/core';
import { GridViewComponent } from './grid-view/grid-view.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

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
        },
        {
            path: 'grid-view',
            component: GridViewComponent
        }, 
        {
            path: 'vehicle-detail/:id',
            component: VehicleDetailComponent
        }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VehicleRoutingModule {
}