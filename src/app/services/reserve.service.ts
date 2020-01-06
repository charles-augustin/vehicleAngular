import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs';
import { Reserve } from '../shared/reserve';
import { baseURL } from '../shared/baseurl';
import { catchError } from 'rxjs/operators';

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
}
