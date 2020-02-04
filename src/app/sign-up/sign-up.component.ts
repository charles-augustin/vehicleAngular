import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user = { username: '', password: '', name: '', email: '' };

  validate: Boolean = true;

  constructor(private userService: UserService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.saveUser(this.user)
      .subscribe(
        user => this.user = <User>user
      );
    form.resetForm();
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open("User Created Successfully", "", {
      duration: 2500
    });
  }
}
