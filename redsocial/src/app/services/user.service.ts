import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private myAppURL: string; 
  private myApiURL: string;

  constructor(private http: HttpClient) {
    this.myAppURL = environment.endpoint;
    this.myApiURL = 'api/users/';
   }

   signIn(user: User): Observable<any>{
    return this.http.post(`${this.myAppURL}${this.myApiURL}`, user)
   }
}
