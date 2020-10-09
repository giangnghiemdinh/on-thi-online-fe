import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

// Provide username and password for authentication, and once authentication is successful,
// store JWT token in session
  authenticate(username, password) {
    const payload = {
      body: {
        username,
        password
      }
    };

    return this.httpClient
      .post<any>(`${environment.apiUri}/auth/token`, payload)
      .pipe(
        map(response => {
          localStorage.setItem('username', username);
          const tokenStr = 'Bearer ' + response.body.token;
          localStorage.setItem('token', tokenStr);
          return response;
        })
      );
  }

  isUserLoggedIn() {
    const user = localStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    localStorage.removeItem('username');
  }
}
