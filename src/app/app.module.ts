import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
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
} from '@angular/material';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { VehicleService } from './services/vehicle.service';
import { baseURL } from './shared/baseurl';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CancelReservationComponent } from './cancel-reservation/cancel-reservation.component';
import { ReservationHistoryComponent } from './reservation-history/reservation-history.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { ClientService } from './services/client.service';
import { ReserveService } from './services/reserve.service';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewVehicleComponent,
    AddVehicleComponent,
    DialogBoxComponent,
    ViewClientComponent,
    AddClientComponent,
    CreateReservationComponent,
    CancelReservationComponent,
    ReservationHistoryComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [
    DialogBoxComponent,
    LoginComponent
  ],
  providers: [VehicleService,
    AuthService,
    ClientService,
    ReserveService,
    { provide: 'baseURL', useValue: baseURL },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
