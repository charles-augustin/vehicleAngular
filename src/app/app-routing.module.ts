import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddVehicleComponent} from './add-vehicle/add-vehicle.component'

const routes: Routes = [
  {path:'add-vehicle', component: AddVehicleComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
