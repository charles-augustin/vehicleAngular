import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Vehicle } from '../shared/vehicle';
import { VehicleService } from '../services/vehicle.service';



// const ELEMENT_DATA: Vehicle[] = [
//   {_id: 1, Model: 'Hydrogen', Make: 'Benz', Type: 'H', Year:2019, Color:"Red", PlateNo:'H34'},
//   {_id: 2, Model: 'Helium', Make: 'Audi', Type: 'He', Year:2017, Color:"Blue", PlateNo:'I34'},
//   {_id: 3, Model: 'Lithium', Make: 'Honda', Type: 'Li', Year:2018, Color:"Yellow", PlateNo:'A34'}
// ];


@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.scss']
})
export class ViewVehicleComponent implements OnInit {

  vehicles: Vehicle[];
  vehicleIds: string[];
  prev: string;
  next: string;
  visibility = "shown";
  errMess: string;

  displayedColumns: string[] = ['No', 'Model', 'Make', 'Type', 'Year', 'Color', 'PlateNo'];
  dataSource = new MatTableDataSource<Vehicle>(this.vehicles);

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private vehicleService: VehicleService,
    @Inject('baseURL') private baseURL) {
  
  }

  ngOnInit() {
    this.vehicleService.getVehicles()
      .subscribe(vehicles => {
        this.dataSource = new MatTableDataSource<Vehicle>(vehicles),
          errmess => this.errMess = <any>errmess;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        //add this line to perform case in-sensitive sort since angular performs case sensitive sort by default
        this.dataSource.sortingDataAccessor = (data, sortHeaderId) => data[sortHeaderId].toLocaleLowerCase();
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
