import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, AuthenticationRequest, AuthenticationResponse } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private URL = 'http://localhost:8075/api/v1/auth';
  constructor(private http: HttpClient) { }

  register(registerRequest: any) {
    return this.http.post<User>(`${this.URL}/register`, registerRequest);
  }
  authenticate(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.URL}/authenticate`, request);
  }

  public getAllUsers(): Observable <User[]> {
    return this.http.get<User[]>(this.http + "User/show-all-users");

  }

  deleteUserById(id:number){
    return this.http.delete(this.http +"User/remove-user/"+id);
  }

 
}
