import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { catchError } from 'rxjs/operators';
import { Client } from '../shared/client';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
})
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _http: HttpClient, private processHTTP:ProcessHTTPMsgService) { 

  }

  getClients() : Observable<Client[]> {
    return this._http.get<Client[]>(baseURL + 'clients')
      .pipe(catchError(this.processHTTP.handleError));
  }

  updateClient(clientData, id: any):Observable<Client> {
    return this._http.put<Client>(baseURL + 'clients/' + id, clientData, httpOptions)
      .pipe(catchError(this.processHTTP.handleError));
  }

  deleteClient(id:any): Observable<Client> {
    return this._http.delete<Client>(baseURL + 'clients/' + id, httpOptions)
      .pipe(catchError(this.processHTTP.handleError));
  }
}
