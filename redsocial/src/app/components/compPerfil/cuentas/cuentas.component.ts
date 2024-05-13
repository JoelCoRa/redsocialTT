import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { PostsService } from '../../../services/posts.service';
import { Cuentas } from '../../../interfaces/cuentas';
import { CuentasService } from '../../../services/cuentas.service';
import { User, UserPerfil } from '../../../interfaces/user';

@Component({
  selector: 'app-cuentas',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './cuentas.component.html',
  styleUrl: './cuentas.component.css'
})
export class CuentasComponent {
  cuenta: string = "Cuenta Seguida/Seguidor";
  seguido: boolean = true;

  constructor(private user: UserService, private cuentas: CuentasService){}

  ngOnInit(): void {
    this.getSeguidos();
  }

  usuario!: UserPerfil;
  getUser(){
    const userId = Number(this.user.getUserId());  
    this.user.getUser(userId).subscribe(data =>{
      this.usuario = data;
      console.log(this.usuario)
    });  
  }


  cuentasSeguidos!: Cuentas[];
  getSeguidos(){
    const userId = Number(this.user.getUserId());    
    this.cuentas.getCuentasSeguidas(userId).subscribe(data => {
      this.cuentasSeguidos = data
      console.log(this.cuentasSeguidos);
     // this.idUsuario = `${this.listPostPropio[0].id.toString()}`;
      // this.contenidoPublicacion = this.listPostPropio[0].contenido
    })
  }




}
