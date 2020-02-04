import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  saveUser(user:any) : Observable<User> {
    return this.http.post<User>(baseURL + 'users/signup', user, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
