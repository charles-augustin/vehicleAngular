import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ReserveService } from 'src/app/services/reserve.service';
import { Reserve } from 'src/app/shared/reserve';

@Component({
  selector: 'ngx-d3-bar',
  template: `
    <ngx-charts-bar-horizontal
      [scheme]="colorScheme"
      [results]="results"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-bar-horizontal>
  `,
})
export class D3BarComponent implements OnInit, OnDestroy {

  results = [
    { name: 'Germany', value: 8940 },
    { name: 'USA', value: 5000 },
    { name: 'France', value: 7200 },
  ];

  // results: any;

  reserveData: Reserve[];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Client';
  yAxisLabel = 'Reservation Count';
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, 
    private reserveService : ReserveService) {
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
        this.results = this.getClientCount(this.reserveData);
      }); 
  }

  getClientCount(reserveData: any) {
    let occurances = reserveData.reduce((r, row) => {
      r[row.client.firstName] = ++r[row.client.firstName] || 1;
      return r;
    }, {});

    let results = Object.keys(occurances).map((key) => {
      return {name: key, value: occurances[key]};
    });

    return results;
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
