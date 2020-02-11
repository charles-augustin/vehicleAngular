import { CancelReservationComponent } from "./cancel-reservation/cancel-reservation.component";
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ReservationComponent } from './reservation.component';
import { NgModule } from '@angular/core';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { ReservationRoutingModule } from './reservation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule, MatSelectModule, MatCardModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

const components = [
    CancelReservationComponent,
    CreateReservationComponent,
    ReservationComponent
];

@NgModule({
    imports: [
        ThemeModule,
        ReservationRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        MatPaginatorModule,
        MatSelectModule,
        MatCardModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    declarations: [
        ...components
    ]
})

export class ReservationModule {

}