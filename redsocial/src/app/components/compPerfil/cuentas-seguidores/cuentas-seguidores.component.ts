import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../../services/user.service';
import { CuentasService } from '../../../services/cuentas.service';
import { UserPerfil } from '../../../interfaces/user';
import { Cuentas } from '../../../interfaces/cuentas';

@Component({
  selector: 'app-cuentas-seguidores',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './cuentas-seguidores.component.html',
  styleUrl: './cuentas-seguidores.component.css'
})
export class CuentasSeguidoresComponent {
  cuenta: string = "Cuenta Seguida/Seguidor";

  seguido: boolean = false;
  constructor(private user: UserService, private cuentas: CuentasService){}

  ngOnInit(): void {
    this.getSeguidores();
  }

  usuario!: UserPerfil;
  getUser(){
    const userId = Number(this.user.getUserId());  
    this.user.getUser(userId).subscribe(data =>{
      this.usuario = data;
      console.log(this.usuario)
    });  
  }


  cuentasSeguidores!: Cuentas[];
  getSeguidores(){
    const userId = Number(this.user.getUserId());    
    this.cuentas.getCuentasSeguidores(userId).subscribe(data => {
      this.cuentasSeguidores = data
      console.log(this.cuentasSeguidores);
     // this.idUsuario = `${this.listPostPropio[0].id.toString()}`;
      // this.contenidoPublicacion = this.listPostPropio[0].contenido
    })
  }
}
