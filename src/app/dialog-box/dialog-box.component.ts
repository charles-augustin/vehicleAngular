import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Vehicle } from '../shared/vehicle';
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';
import {ClientService} from '../services/client.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Client } from '../shared/client';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  vehicle: Vehicle;
  client: Client;
  errMess: any;
  updateForm = new FormGroup({
    Type: new FormControl('', [Validators.required]),
    Make: new FormControl('', [Validators.required]),
    Model: new FormControl('', [Validators.required]),
    Year: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,4}')]),
    Color: new FormControl('', [Validators.required]),
    PlateNo: new FormControl('', [Validators.required])
  });
  
  clientForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    licenseNo: new FormControl('', [Validators.required]),
    lExpiryDate: new FormControl('', [Validators.required]),
    phoneNo: new FormControl('', [Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data:any,
    private vehicleService: VehicleService,
    private clientService: ClientService) {
    console.log(data);
    // console.log(dataClient);
    
    this.local_data = { ...data };
  
    this.action = this.local_data.action;

  }

  action: string;
  local_data: any;

  ngOnInit() {
  }

  doAction() {
    // console.log(this.vehicle);
    this.dialogRef.close({ event: this.action, data: this.local_data });
    if (this.action == 'vehicleUpdate') {
      this.vehicleService.updateVehicle(this.updateForm.value, this.data._id)
        .subscribe(vehicle => this.vehicle = <Vehicle>vehicle);
    }
    else if (this.action == 'vehicleDelete') {
      this.vehicleService.deleteVehicle(this.data._id)
        .subscribe(vehicle => this.vehicle = <Vehicle>vehicle);
    }
    else if(this.action == 'clientUpdate') {
      this.clientService.updateClient(this.clientForm.value, this.data._id)
        .subscribe(client => this.client = <Client> client);
    }
    else {
      this.clientService.deleteClient(this.data._id)
        .subscribe(client => this.client = <Client> client);
    }
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
