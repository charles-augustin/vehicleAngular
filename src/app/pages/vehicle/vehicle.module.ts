import { AddVehicleComponent } from "./add-vehicle/add-vehicle.component";
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleComponent } from './vehicle.component';
import { MatInputModule, MatSelectModule, MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTableModule, MatFormFieldModule, MatSortModule, MatPaginatorModule, MatCardModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { GridViewComponent } from './grid-view/grid-view.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

const components = [
    AddVehicleComponent,
    ViewVehicleComponent,
    VehicleComponent,
    GridViewComponent,
    VehicleDetailComponent
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
        MatNativeDateModule,
        FontAwesomeModule
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