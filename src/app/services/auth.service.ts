import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

interface AuthResponse {
  status: string;
  success: string;
  token: string;
}

interface JWTResponse {
  status: string;
  success: string;
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenKey = 'JWT';
  isAuthenticated = false;
  username: Subject<string> = new Subject<string>();
  authToken: string = undefined;

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  clearUserName() {
    this.username.next(undefined);
  }

  destroyCredentials() {
    this.authToken = undefined;
    this.clearUserName();
    this.isAuthenticated = false;
    localStorage.removeItem(this.tokenKey);
  }

  sendUserName(name: string) {
    this.username.next(name);
  }

  checkJWTtoken() {
    this.http.get<JWTResponse>(baseURL + 'users/checkJWTtoken')
      .subscribe(res => {
        console.log('JWT token valid:', res);
        this.sendUserName(res.user.username)
      }, 
      err => {
        console.log('JWT token invalid', err);
        this.destroyCredentials();
      })
  }

  useCredentials(credentials: any) {
    this.isAuthenticated = true;
    this.sendUserName(credentials.username);
    this.authToken = credentials.token;
  }

  loadUserCredentials() {
    const credentials = JSON.parse(localStorage.getItem(this.tokenKey));
    console.log('load User Credentials', credentials);
    if(credentials && credentials.username !== undefined) {
      this.useCredentials(credentials);
      if(this.authToken) {
        this.checkJWTtoken();
      }
    }
  }

  storeUserCredentials(credentials: any) {
    console.log("Credentials", credentials);
    localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
    this.useCredentials(credentials);
  }

  logIn(user: any): Observable<any> {
    return this.http.post<AuthResponse>(baseURL + 'users/login', { 'username': user.username, 'password': user.password })
      .pipe(map(res => {
        this.storeUserCredentials({ username: user.username, token: res.token });
        return { 'success': true, 'username': user.username };
      }),
        catchError(error => this.processHTTPMsgService.handleError));
  }

  getUserName(): Observable<String> {
    return this.username.asObservable();
  }

  logOut() {
    this.destroyCredentials();
  }
}
