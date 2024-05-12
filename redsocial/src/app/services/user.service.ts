import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User, UserPerfil } from '../interfaces/user';
import { Observable } from 'rxjs';
import { UserLogin } from '../interfaces/user';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppURL: string; 
  private myApiURL: string;
  

  constructor(private http: HttpClient) {
    this.myAppURL = environment.endpoint;
    this.myApiURL = 'api/users';
  }

  signIn(user: User): Observable<any>{
    return this.http.post(`${this.myAppURL}${this.myApiURL}`, user)
  }

  login(user: UserLogin):Observable<string>{
    return this.http.post<string>(`${this.myAppURL}${this.myApiURL}/login`, user)
  }
  
  getUsername(): Observable<string> {
    return this.http.get<any>(`${this.myAppURL}${this.myApiURL}`);
  }
  getUser(id: number): Observable<UserPerfil[]> {
    return this.http.get<any>(`${this.myAppURL}${this.myApiURL}/getuser/`);
  }
  getToken(): string | null{
    const token = localStorage.getItem('token')
    return token;
  }

  getUserId(): string | null{
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        return decodedToken.idUser;
      } catch (error) {
        console.error('Error decodificando el token:', error);
        return null;
      }
    }
    return null;
  }
}
