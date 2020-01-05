import { Component, OnInit } from '@angular/core';
import { Reserve } from '../shared/reserve';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {VehicleService} from '../services/vehicle.service';
import { Vehicle } from '../shared/vehicle';
import { Client } from '../shared/client';
import { ClientService } from '../services/client.service';

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
    client: new FormControl('', [Validators.required])
  });

  constructor(private vehicleService: VehicleService, 
    private clientService: ClientService) { }

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

}
