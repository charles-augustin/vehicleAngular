import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs';
import { Reserve } from '../shared/reserve';
import { baseURL } from '../shared/baseurl';
import { catchError } from 'rxjs/operators';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
})
};

@Injectable({
  providedIn: 'root'
})

export class ReserveService {

  constructor(private http: HttpClient, private processHTTP: ProcessHTTPMsgService) { }

  createReservation(reserveData): Observable<Reserve> {

    console.log(reserveData);

    return this.http.post<Reserve>(baseURL + 'reservation', reserveData, httpOptions)
      .pipe(catchError(this.processHTTP.handleError));
  }

  findReservationByVehicle(id: string): Observable<Reserve[]> {
    return this.http.get<Reserve[]>(baseURL + 'reservation/findReservationByVehicle/' + id)
      .pipe(catchError(this.processHTTP.handleError));
  }

  getReservation(): Observable<Reserve[]> {
    return this.http.get<Reserve[]>(baseURL + 'reservation')
      .pipe(catchError(this.processHTTP.handleError));
  }

  updateReservationStatus(id: string, status): Observable<Reserve> {
    return this.http.put<Reserve>(baseURL + 'reservation/updateStatus/' + id, status, httpOptions)
      .pipe(catchError(this.processHTTP.handleError));
  }
}
