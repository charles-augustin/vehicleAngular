import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { ClientModule } from './client/client.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule, MatSelectModule, MatCardModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ReservationModule } from './reservation/reservation.module';
import { ReservationHistoryComponent } from './reservation-history/reservation-history.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    VehicleModule,
    ClientModule,
    ReservationModule,
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
    PagesComponent,
    ReservationHistoryComponent
  ],
})
export class PagesModule {
}
