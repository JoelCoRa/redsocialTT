import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { PostPropio, PostSeg } from '../interfaces/post';
import { Token } from '@angular/compiler';
import { Router, RouterModule } from '@angular/router';
import { ErrorService } from './error.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient, private router: Router, private error: ErrorService, private sb: MatSnackBar) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/posts'
  }

  // Se consume en el dashboard
  getPostSeg(): Observable<PostSeg[]> {    
    return this.http.get<PostSeg[]>(`${this.myAppUrl}api/dashboard/postseg`); 
  }


  // Se consume en perfil
  getPostPropio(id: number): Observable<PostPropio[]>{   
    return this.http.get<PostPropio[]>(`${this.myAppUrl}api/perfil/postpropio/`); 
    // return this.http.get<PostPropio[]>(`${this.myAppUrl}${this.myApiUrl}/postpropio`);
  }

}
