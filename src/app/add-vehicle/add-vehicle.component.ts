import { Component, OnInit , ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort ,MatPaginator} from '@angular/material';

export interface PeriodicElement {
  position: number;
  model: string;
  make: number;
  type: string;
  year:number;
  color:string;
  plateNo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, model: 'Hydrogen', make: 1.0079, type: 'H', year:2019, color:"Red", plateNo:'H34'},
  {position: 2, model: 'Helium', make: 4.0026, type: 'He', year:2017, color:"Blue", plateNo:'I34'},
  {position: 3, model: 'Lithium', make: 6.941, type: 'Li', year:2018, color:"Yellow", plateNo:'A34'}
];


@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  displayedColumns: string[] = ['position', 'model', 'make', 'type', 'year', 'color', 'plateNo'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  @ViewChild(MatSort,null) sort: MatSort;
  @ViewChild(MatPaginator,null) paginator :MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  

}
