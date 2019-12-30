import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Vehicle } from '../shared/vehicle';
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ViewVehicleComponent } from '../view-vehicle/view-vehicle.component';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  vehicle: Vehicle;
  errMess: any;
  updateForm = new FormGroup({
    Type: new FormControl('', [Validators.required]),
    Make: new FormControl('', [Validators.required]),
    Model: new FormControl('', [Validators.required]),
    Year: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,4}')]),
    Color: new FormControl('', [Validators.required]),
    PlateNo: new FormControl('', [Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Vehicle,
    private _http: HttpClient,
    private vehicleService: VehicleService,
    private route: ActivatedRoute) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  action: string;
  local_data: any;

  ngOnInit() {
    // this.route.params.pipe(switchMap((params: Params) => {
    //   return this.vehicleService.getVehicle(params['vehicleID']);
    // }))
    //   .subscribe(vehicle => {
    //     this.vehicle = vehicle;
    //     console.log("Dialog log");
    //     console.log(this.vehicle);
    //   }, errmess => this.errMess = <any>errmess);

  }

  doAction() {
    // console.log(this.vehicle);
    this.dialogRef.close({ event: this.action, data: this.local_data });
    if (this.action == 'Update') {
      this.vehicleService.updateVehicle(this.updateForm.value, this.data._id)
        .subscribe(vehicle => this.vehicle = <Vehicle>vehicle);
    }
    else {
      this.vehicleService.deleteVehicle(this.data._id)
        .subscribe(vehicle => this.vehicle = <Vehicle>vehicle);
    }
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
