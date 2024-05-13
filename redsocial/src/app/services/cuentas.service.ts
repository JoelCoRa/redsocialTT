import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { Observable } from 'rxjs';
import { Cuentas } from '../interfaces/cuentas';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  private myAppUrl: string;

  constructor(private http: HttpClient, private error: ErrorService) {
    this.myAppUrl = environment.endpoint;
   }

  getCuentasSeguidas(id:number): Observable<Cuentas[]>{
    return this.http.get<Cuentas[]>(`${this.myAppUrl}api/perfil/cuentasseguidos/${id}`)
  }
  getCuentasSeguidores(id:number): Observable<Cuentas[]>{
    return this.http.get<Cuentas[]>(`${this.myAppUrl}api/perfil/cuentasseguidores/${id}`)
  }
}
