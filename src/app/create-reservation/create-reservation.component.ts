import { Component, OnInit } from '@angular/core';
import { Reserve } from '../shared/reserve';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import {VehicleService} from '../services/vehicle.service';
import { Vehicle } from '../shared/vehicle';
import { Client } from '../shared/client';
import { ClientService } from '../services/client.service';
import { ReserveService } from '../services/reserve.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit {

  reserve: Reserve;
  loadedVehicle: Vehicle[];
  loadedClient: Client[];
  createReservationForm = new FormGroup({
    vehicle: new FormControl('',[Validators.required]),
    client: new FormControl('', [Validators.required]),
    fromDate: new FormControl('', [Validators.required]),
    toDate: new FormControl('', [Validators.required])
  });

  constructor(private vehicleService: VehicleService, 
    private clientService: ClientService,
    private reserveService: ReserveService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.vehicleService.getVehicles()
      .subscribe((vehicles) => {
        this.loadedVehicle = vehicles;
      });
    
    this.clientService.getClients()
      .subscribe((clients) => {
        this.loadedClient = clients;
      });
  }

  onSubmit(formDirective: FormGroupDirective) {
    console.log(this.createReservationForm.value);
    this.reserveService.createReservation(this.createReservationForm.value)
      .subscribe(reserve => this.reserve = <Reserve>reserve);
    formDirective.resetForm();
    this.createReservationForm.reset();
  }

  openSnackBar() {
    this.snackBar.open("Reservation Created Successfully", "", {
      duration: 2500
    });
  }
}
