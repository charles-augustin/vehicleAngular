import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Vehicle } from '../../shared/vehicle';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { ClientService } from '../../services/client.service';
import { Client } from '../../shared/client';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  vehicle: Vehicle;
  client: Client;
  errMess: any;
  image;
  updateForm = new FormGroup({
    Type: new FormControl('', [Validators.required]),
    Make: new FormControl('', [Validators.required]),
    Model: new FormControl('', [Validators.required]),
    Year: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,4}')]),
    Color: new FormControl('', [Validators.required]),
    PlateNo: new FormControl('', [Validators.required]),
    ImageFile: new FormControl('', [])
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
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
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

  doAction(formDirective: FormGroupDirective) {
    // console.log(this.vehicle);
    this.dialogRef.close({ event: this.action, data: this.local_data });
    if (this.action == 'vehicleUpdate') {
      console.log(this.updateForm.value);
      console.log(this.local_data);

      const fd = new FormData();
      fd.append('Type', this.updateForm.get('Type').value);
      fd.append('Make', this.updateForm.get('Make').value);
      fd.append('Model', this.updateForm.get('Model').value);
      fd.append('Year', this.updateForm.get('Year').value);
      fd.append('Color', this.updateForm.get('Color').value);
      fd.append('PlateNo', this.updateForm.get('PlateNo').value);
      fd.append('VehicleImage', this.image);

      this.vehicleService.updateVehicle(fd, this.local_data._id)
        .subscribe(vehicle => this.vehicle = <Vehicle>vehicle);
    }
    else if (this.action == 'vehicleDelete') {
      this.vehicleService.deleteVehicle(this.local_data._id)
        .subscribe(vehicle => this.vehicle = <Vehicle>vehicle);
    }
    else if (this.action == 'clientUpdate') {
      this.clientService.updateClient(this.clientForm.value, this.local_data._id)
        .subscribe(client => this.client = <Client>client);
    }
    else {
      this.clientService.deleteClient(this.local_data._id)
        .subscribe(client => this.client = <Client>client);
    }
    // formDirective.resetForm();
    // this.updateForm.reset();
    // this.local_data=null;
  }

  selectImage(event) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;       
    }
    else {
      this.image = null;
    }
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
