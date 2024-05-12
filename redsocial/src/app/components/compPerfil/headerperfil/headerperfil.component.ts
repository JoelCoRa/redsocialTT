import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { UserPerfil } from '../../../interfaces/user';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-headerperfil',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './headerperfil.component.html',
  styleUrl: './headerperfil.component.css'
})
export class HeaderperfilComponent {
  nombreUsuario: string = "Usuario";
  idUsuario: string = "0000000";
  descripcionUsuario: string = 'Aun no tienes una descripción';
  addDescInputOpen: boolean = false;
  numSeguidos: number = 0;
  numSeguidores: number = 0;
  numPublicaciones: number = 0;

  constructor(private router: Router, private user: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }
  openInput(){
    this.addDescInputOpen = !this.addDescInputOpen; // Alternar el valor de la variable mostrar
  } 
  toPerfil(){
    this.router.navigate(['/perfil']);
  }
  toSeguidos(){
    this.router.navigate(['/perfil/seguidos']);
  }
  toSeguidores(){
    this.router.navigate(['/perfil/seguidores']);
  }

  usuario: UserPerfil[] = [];

  getUserId(): string | null{
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        console.log(decodedToken.idUser)
        return decodedToken.idUser;
      } catch (error) {
        console.error('Error decodificando el token:', error);
        return null;
      }
    }
    return null;
  }
  getUser(){
    const idUser = Number(this.getUserId());

    console.log(idUser);
   
    this.user.getUser(idUser).subscribe(data =>{
      this.usuario = data
      this.idUsuario = '000'+ this.usuario[0].id.toString();
      this.nombreUsuario = this.usuario[0].nombreUsuario;     
      this.descripcionUsuario = this.usuario[0].descripcion; 
      this.numSeguidos = this.usuario[0].cuentasSeguidas;
      this.numSeguidores = this.usuario[0].seguidores;
      this.numPublicaciones = this.usuario[0].totalPosts;
      // console.log(this.usuario);
    })
  }
  



  


}
