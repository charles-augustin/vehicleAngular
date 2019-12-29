import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, 
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
        MatDialogModule
      } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { VehicleService } from './services/vehicle.service';
import { baseURL } from './shared/baseurl';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewVehicleComponent,
    AddVehicleComponent,
    DialogBoxComponent
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
    MatDialogModule
  ],
  entryComponents:[
    DialogBoxComponent
  ],
  providers: [VehicleService,
    {provide: 'baseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
