import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/client';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  client: Client;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private clientService: ClientService) {

  }

  addForm = new FormGroup
    ({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      licenseNo: new FormControl('', [Validators.required]),
      lExpiryDate: new FormControl('', [Validators.required]),
      phoneNo: new FormControl('', [Validators.required])
    });

  ngOnInit() {
  }

  onSubmit(formDirective: FormGroupDirective) {
    console.log(this.addForm.value);
    this.clientService.addClient(this.addForm.value)
      .subscribe(
        client => this.client = <Client>client
      );
    formDirective.resetForm();
    this.addForm.reset();
  }

  openSnackBar() {
    this._snackBar.open("Client Created Successfully", "", {
      duration: 2500
    });
  }

}
