import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewVehicleComponent} from './view-vehicle/view-vehicle.component'

const routes: Routes = [
  {path:'view-vehicle', component: ViewVehicleComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
