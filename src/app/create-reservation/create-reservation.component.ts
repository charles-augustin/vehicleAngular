import { Component, OnInit } from '@angular/core';
import { Reserve } from '../shared/reserve';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';
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
  available: any;
  reserve: Reserve;
  reserves: Reserve[];
  vehicle: Vehicle;
  loadedVehicle: Vehicle[];
  loadedClient: Client[];
  createReservationForm = new FormGroup({
    vehicle: new FormControl('', [Validators.required]),
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
    console.log(this.createReservationForm.get('vehicle').value);



    this.reserveService.findReservationByVehicle(this.createReservationForm.get('vehicle').value)
      .subscribe(reserve => {
        this.reserves = <Reserve[]>reserve;
        this.reserves.forEach(ele => {
          console.log(ele);
          if (ele.fromDate <= this.createReservationForm.get('toDate').value && ele.toDate >= this.createReservationForm.get('fromDate').value) {
            this.openSnackBar('failure', formDirective);
            return;
          }
          else {
            this.reserveService.createReservation(this.createReservationForm.value)
              .subscribe(reserve => this.reserve = <Reserve>reserve);

            this.openSnackBar('success', formDirective);
            return;
          }
        });
      });

    this.reserveService.createReservation(this.createReservationForm.value)
      .subscribe(reserve => this.reserve = <Reserve>reserve);

    //update the vehicle availability
    this.vehicleService.updateVehicleAvailability(this.createReservationForm.get('vehicle').value, { "Available": "No" }).subscribe(vehicle => this.vehicle = <Vehicle>vehicle);
    console.log("No");

    this.openSnackBar('success', formDirective);
  }

  openSnackBar(msg: any, formDirective: FormGroupDirective) {
    let message;
    if (msg == 'success') {
      message = "Reservation Created Successfully!";
      formDirective.resetForm();
      this.createReservationForm.reset();
    }
    else
      message = "Reservation cannot be created!"
    this.snackBar.open(message, "", {
      duration: 2500
    });
  }
}
