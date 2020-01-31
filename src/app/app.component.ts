import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material/dialog'
import { LoginComponent } from './login/login.component';
import { Subscription } from 'rxjs';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  

  title = 'vehicleAngular';
  opened = false;
  username = undefined;
  subscription: Subscription;

  constructor(private dialog: MatDialog,
    private authService: AuthService) {
    
  }

  ngOnInit() {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUserName()
      .subscribe(name => this.username = name);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openLoginForm() {
    const loginRef = this.dialog.open(LoginComponent, {width: '500px', height: '350px'});

    loginRef.afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }
}
