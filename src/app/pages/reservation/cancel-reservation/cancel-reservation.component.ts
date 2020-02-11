import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Reserve } from '../../../shared/reserve';
import { MatTableDataSource, MatSort, MatPaginator, MatTable, MatDialog } from '@angular/material';
import { ReserveService } from '../../../services/reserve.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.scss'],
  providers: [DatePipe]
})
export class CancelReservationComponent implements OnInit {
  reserves: Reserve[];
  reserve: Reserve;
  clientIds: string[];
  prev: string;
  next: string;
  visibility = "shown";
  errMess: string;

  dateVal = new Date();

  displayedColumns: string[] = ['No', 'vehicle', 'client', 'fromDate', 'toDate', 'status', 'Action'];
  dataSource = new MatTableDataSource<Reserve>(this.reserves);

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(private reserveService: ReserveService,
    @Inject('baseURL') private baseURL,
    public dialog: MatDialog,
    private dPipe: DatePipe) {
  }

  ngOnInit() {
    this.reserveService.getReservation()
      .subscribe(reserves => {
        this.dataSource = new MatTableDataSource<Reserve>(reserves),
          errmess => this.errMess = <any>errmess;
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case 'client': return item.client.firstName;
            case 'vehicle': return item.vehicle.Model;
            default: return item[property];
          }
        };
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        //add this line to perform case in-sensitive sort since angular performs case sensitive sort by default
        // this.dataSource.sortingDataAccessor = (data, sortHeaderId) => data[sortHeaderId].toLocaleLowerCase();
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateData(row_obj) {
    this.reserveService.getReservation()
      .subscribe(reserves => {
        this.dataSource = new MatTableDataSource<Reserve>(reserves),
          errmess => this.errMess = <any>errmess;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        //add this line to perform case in-sensitive sort since angular performs case sensitive sort by default
        // this.dataSource.sortingDataAccessor = (data, sortHeaderId) => data[sortHeaderId].toLocaleLowerCase();
      });
  }

  action(id, perform) {
    console.log({ "status": perform });

    this.reserveService.updateReservationStatus(id, { "status": perform })
      .subscribe(reserves => this.reserve = <Reserve>reserves);
  }
}


