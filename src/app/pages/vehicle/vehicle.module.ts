import { AddVehicleComponent } from "./add-vehicle/add-vehicle.component";
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleComponent } from './vehicle.component';
import { MatInputModule, MatSelectModule, MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTableModule, MatFormFieldModule, MatSortModule, MatPaginatorModule, MatCardModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';

const components = [
    AddVehicleComponent,
    ViewVehicleComponent,
    VehicleComponent
];

@NgModule({
    imports: [
        ThemeModule,
        VehicleRoutingModule,
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
    ],
    providers: [
        VehicleService
    ]
})

export class VehicleModule {

}