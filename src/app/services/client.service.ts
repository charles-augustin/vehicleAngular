import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { catchError } from 'rxjs/operators';
import { Client } from '../shared/client';

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
}
