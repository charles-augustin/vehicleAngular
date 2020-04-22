import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ReserveService } from 'src/app/services/reserve.service';
import { Reserve } from 'src/app/shared/reserve';

@Component({
  selector: 'ngx-d3-pie',
  template: `
    <ngx-charts-pie-chart
      [scheme]="colorScheme"
      [results]="results"
      [legend]="showLegend"
      [labels]="showLabels">
    </ngx-charts-pie-chart>
  `,
})
export class D3PieComponent implements OnDestroy {
  results : any;
  reserveData : Reserve[];
  showLegend = true;
  showLabels = true;
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private reserveService: ReserveService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnInit() {
    this.reserveService.getReservation()
      .subscribe(res => {
        this.reserveData = res;
        console.log(this.reserveData);
        
        this.results = this.getVehiclePopularity(this.reserveData);
      });
  }

  getVehiclePopularity(data:any) {
    let occ = data.reduce((r, row) => {
      r[row.vehicle.Make + "-" + row.vehicle.Model] = ++r[row.vehicle.Make + "-" + row.vehicle.Model] || 1;
      return r;
    }, {});

    let res = Object.keys(occ).map(key => {
      return {name: key, value: occ[key]};
    });

    return res;
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
