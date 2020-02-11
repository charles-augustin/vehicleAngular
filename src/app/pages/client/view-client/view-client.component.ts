import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Client } from '../../../shared/client';
import { MatTableDataSource, MatSort, MatPaginator, MatTable, MatDialog } from '@angular/material';
import { ClientService } from '../../../services/client.service';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss'],
  providers: [DatePipe]
})
export class ViewClientComponent implements OnInit {

  clients: Client[];
  clientIds: string[];
  prev: string;
  next: string;
  visibility = "shown";
  errMess: string;

  dateVal  =new Date();

  displayedColumns: string[] = ['No', 'firstName', 'lastName', 'licenseNo', 'lExpiryDate', 'phoneNo','Action'];
  dataSource = new MatTableDataSource<Client>(this.clients);

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  constructor(private clientService: ClientService,
    @Inject('baseURL') private baseURL, 
    public dialog: MatDialog,
    private dPipe: DatePipe) {
  
  }

  ngOnInit() {
    this.clientService.getClients()
      .subscribe(clients => {
        this.dataSource = new MatTableDataSource<Client>(clients),
          errmess => this.errMess = <any>errmess;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        //add this line to perform case in-sensitive sort since angular performs case sensitive sort by default
        // this.dataSource.sortingDataAccessor = (data, sortHeaderId) => data[sortHeaderId].toLocaleLowerCase();
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '300px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(res => {
        this.updateData(res.data);
    });
  }

  updateData(row_obj){
    this.clientService.getClients()
      .subscribe(clients => {
        this.dataSource = new MatTableDataSource<Client>(clients),
          errmess => this.errMess = <any>errmess;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        //add this line to perform case in-sensitive sort since angular performs case sensitive sort by default
        // this.dataSource.sortingDataAccessor = (data, sortHeaderId) => data[sortHeaderId].toLocaleLowerCase();
      });
  }

}
