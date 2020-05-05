import { Component, OnInit } from "@angular/core";
import { Vehicle } from 'src/app/shared/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

import {baseURL} from '../../shared/baseurl'

@Component({
    selector: 'grid-view',
    templateUrl: 'grid-view.component.html',
    styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
    vehicles : Vehicle[];
    baseURL: String;

    constructor(private vehicleService : VehicleService) {
        this.baseURL = baseURL;
    }

    ngOnInit() {
        this.getVehicles();
    }

    getVehicles() {
        this.vehicleService.getVehicles()
            .subscribe(res => {
                this.vehicles = res;
                console.log(this.vehicles);
            });
    }

}