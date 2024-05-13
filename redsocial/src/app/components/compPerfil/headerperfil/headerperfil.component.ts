import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { UserPerfil } from '../../../interfaces/user';
import { jwtDecode } from 'jwt-decode';
import { TotalPosts } from '../../../interfaces/post';
import { PostsService } from '../../../services/posts.service';

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

  constructor(private router: Router, private user: UserService, private post: PostsService) { }

  ngOnInit(): void {
    this.getUser();
    this.getTotalPosts();
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

  getUserId(): string | null{
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        // console.log(decodedToken.idUser)
        return decodedToken.idUser;
      } catch (error) {
        console.error('Error decodificando el token:', error);
        return null;
      }
    }
    return null;
  }

  usuario !: UserPerfil;
  getUser(){
    const idUser = Number(this.getUserId());
    // console.log(idUser);   
    this.user.getUser(idUser).subscribe(data =>{
      this.usuario = data
      // console.log(this.usuario)
      this.idUsuario = '000'+ this.usuario.id.toString();
      this.nombreUsuario = this.usuario.nombreUsuario;     
      this.descripcionUsuario = this.usuario.descripcion; 
      this.numSeguidos = this.usuario.cuentasSeguidas;
      this.numSeguidores = this.usuario.seguidores;
      // console.log(this.usuario);
    })
  }

  totalPosts!: number;

  getTotalPosts(){
    const idUser = Number(this.getUserId());
    this.post.getTotalPosts(idUser).subscribe(data2 =>{
      this.totalPosts = data2
      // console.log(this.totalPosts);
      this.numPublicaciones = this.totalPosts;
    })
  }
  



  


}
