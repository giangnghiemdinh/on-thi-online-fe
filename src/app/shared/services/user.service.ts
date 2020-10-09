import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getProfile() {
    const payload = {
      body: {}
    };
    return this.httpClient.post<any>(`${environment.apiUri}/api/profile/get`, payload).pipe(
      catchError(err => throwError(err))
    );
  }

  getAvatar() {
    const payload = {
      body: {}
    };
    return this.httpClient.post<any>(`${environment.apiUri}/api/profile/get-img`, payload).pipe(
      catchError(err => throwError(err))
    );
  }
}
