import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class ChartService {
    constructor(private http: HttpClient, 
        private processHttpMsgService: ProcessHTTPMsgService){

    }
}