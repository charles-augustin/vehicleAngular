import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
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
        MatPaginatorModule} from '@angular/material';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AddVehicleComponent
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
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
