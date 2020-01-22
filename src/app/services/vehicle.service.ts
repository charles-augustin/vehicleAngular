import { Injectable } from '@angular/core';
import { Vehicle } from '../shared/vehicle';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

import { ProcessHTTPMsgService } from './process-httpmsg.service'
import { Client } from '../shared/client';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
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
    return this.getVehicles().pipe(map(vehicles => vehicles.map(vehicle => vehicle._id)))
      .pipe(catchError(error => error));
  }

  addVehicle(userData): Observable<Vehicle> {
    console.log(userData);

    return this.http.post<Vehicle>(baseURL + 'vehicles', userData, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  updateVehicle(updateData, id: any): Observable<Vehicle> {
    return this.http.put<Vehicle>(baseURL + 'vehicles/' + id, updateData, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  deleteVehicle(id: any): Observable<Vehicle> {
    return this.http.delete<Vehicle>(baseURL + 'vehicles/' + id, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getVehicleType(): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'vehicles/get-type')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

}
