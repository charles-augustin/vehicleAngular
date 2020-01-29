import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component'
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CancelReservationComponent } from './cancel-reservation/cancel-reservation.component';
import { ReservationHistoryComponent } from './reservation-history/reservation-history.component';

const routes: Routes = [
  { path: 'view-vehicle', component: ViewVehicleComponent },
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'view-client', component: ViewClientComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'create-reservation', component: CreateReservationComponent },
  { path: 'cancel-reservation', component: CancelReservationComponent },
  { path: 'reservation-history', component: ReservationHistoryComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
