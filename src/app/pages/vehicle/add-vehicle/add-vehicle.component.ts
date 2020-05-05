import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { VehicleService } from '../../../services/vehicle.service';
import { Vehicle } from '../../../shared/vehicle';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  vehicle: Vehicle;

  image;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private vehicleService: VehicleService) {

  }

  addForm = new FormGroup
    ({
      Type: new FormControl('', [Validators.required]),
      Make: new FormControl('', [Validators.required]),
      Model: new FormControl('', [Validators.required]),
      Year: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,4}')]),
      Color: new FormControl('', [Validators.required]),
      PlateNo: new FormControl('', [Validators.required]),
      ImageFile: new FormControl('', [Validators.required])
    });

  ngOnInit() {
  }

  checkYear() {
    return this.addForm.get('Year').hasError('required') ? 'Year is required' :
      this.addForm.get('Year').hasError('pattern') ? 'Year must be numeric with max length of 4' : '';
  }

  onSubmit(formDirective: FormGroupDirective) {

    const fd = new FormData();
    fd.append('Type', this.addForm.get('Type').value);
    fd.append('Make', this.addForm.get('Make').value);
    fd.append('Model', this.addForm.get('Model').value);
    fd.append('Year', this.addForm.get('Year').value);
    fd.append('Color', this.addForm.get('Color').value);
    fd.append('PlateNo', this.addForm.get('PlateNo').value);
    fd.append('VehicleImage', this.image);    

    this.vehicleService.addVehicle(fd)
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

  selectImage(event) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;       
    }
    else {
      this.image = null;
    }
  }
}
