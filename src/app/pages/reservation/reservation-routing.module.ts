import { CancelReservationComponent } from "./cancel-reservation/cancel-reservation.component";
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ReservationComponent } from './reservation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [{
    path: '',
    component: ReservationComponent,
    children: [{
        path: 'create-reservation',
        component: CreateReservationComponent
    },
    {
        path: 'cancel-reservation',
        component: CancelReservationComponent
    }]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ReservationRoutingModule {

}