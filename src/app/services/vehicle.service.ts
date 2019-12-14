import { Injectable } from '@angular/core';
import {Vehicle} from '../shared/vehicle';

import {Observable} from 'rxjs';
import {map, catchError} from  'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';

import {ProcessHTTPMsgService} from './process-httpmsg.service'


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(baseURL + 'vehicles')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getVehicle(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(baseURL + 'vehicles/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getVehicleIds(): Observable<number[] | any> {
    return this.getVehicles().pipe(map(vehicles => vehicles.map(vehicle=> vehicle._id)))
      .pipe(catchError(error => error));
  }
}
