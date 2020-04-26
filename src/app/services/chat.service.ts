import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    socket;
    chats;
    constructor(private http: HttpClient, private processHTTP:ProcessHTTPMsgService) {
    }

    addMessage(name, msg) {
       this.http.post(baseURL + 'chat', {name: name, message: msg})
        .subscribe();
    }

    getChats(): Observable<string[]> {
        return this.http.get<string[]>(baseURL + 'chat', httpOptions)
            .pipe(catchError(this.processHTTP.handleError));
    }
}