import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../shared/vehicle';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  vehicle: Vehicle;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private vehicleService: VehicleService) {

  }

  addForm = new FormGroup
    ({
      Type: new FormControl('', [Validators.required]),
      Make: new FormControl('', [Validators.required]),
      Model: new FormControl('', [Validators.required]),
      Year: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,4}')]),
      Color: new FormControl('', [Validators.required]),
      PlateNo: new FormControl('', [Validators.required])
    });

  ngOnInit() {
  }

  checkYear() {
    return this.addForm.get('Year').hasError('required') ? 'Year is required' :
      this.addForm.get('Year').hasError('pattern') ? 'Year must be numeric with max length of 4' : '';
  }

  onSubmit(formDirective: FormGroupDirective) {
    console.log(this.addForm.value);
    this.vehicleService.addVehicle(this.addForm.value)
      .subscribe(
        vehicle => this.vehicle = <Vehicle>vehicle
      );
    formDirective.resetForm();
    this.addForm.reset();
  }

  openSnackBar() {
    this._snackBar.open("Vehicle Created Successfully", "", {
      duration: 2500
    });
  }
}
