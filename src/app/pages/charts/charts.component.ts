import { Component } from '@angular/core';

@Component({
  selector: 'ngx-charts',
  template: `
    
    <div>
      <nb-card>
        <nb-card-header>User Reservation Count</nb-card-header>
        <nb-card-body>
        <ngx-d3-bar></ngx-d3-bar>
        </nb-card-body>
      </nb-card>
    </div>

    <div>
      <nb-card>
        <nb-card-header>Popular Cars - Reservation</nb-card-header>
        <nb-card-body>
        <ngx-d3-pie></ngx-d3-pie>
        </nb-card-body>
      </nb-card>
    </div>
      
    <router-outlet></router-outlet>

  `,
})
export class ChartsComponent {
}
