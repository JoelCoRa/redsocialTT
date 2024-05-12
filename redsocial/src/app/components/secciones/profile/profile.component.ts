import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { MensajeSidebarComponent } from '../../mensaje-sidebar/mensaje-sidebar.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { TituloSeccionComponent } from '../../titulo-seccion/titulo-seccion.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { PublicacionpropiaComponent } from "../../compPerfil/publicacionpropia/publicacionpropia.component";
import { CrearpublicacionComponent } from "../../crearpublicacion/crearpublicacion.component";
import { CommonModule } from '@angular/common';
import { HeaderperfilComponent } from "../../compPerfil/headerperfil/headerperfil.component";
import { MensajevacioComponent } from "../../mensajevacio/mensajevacio.component";
import { PostsService } from '../../../services/posts.service';
import { PostPropio } from '../../../interfaces/post';
import { UserService } from '../../../services/user.service';
import { datastax } from 'cassandra-driver';
import { jwtDecode } from 'jwt-decode';
import { User, UserPerfil } from '../../../interfaces/user';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [FooterComponent, RouterModule, MensajeSidebarComponent, NavbarComponent, SidebarComponent, MatCardModule, TituloSeccionComponent, MatButtonToggleModule, FormsModule, ReactiveFormsModule, PublicacionpropiaComponent, CrearpublicacionComponent, CommonModule, HeaderperfilComponent, MensajevacioComponent]
})
export class ProfileComponent {

  nombreUsuario: string = "Usuario";
  idUsuario: string = '';
  numPublicaciones: number = 0;
  contenidoPublicacion: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iure! Accusamus placeat voluptatibus nemo quam magnam nulla ullam impedit magni harum, eius, eum neque in consequuntur reiciendis odit, debitis officiis."
  fechaPublicacion: string = "14 de febrero de 2024";
  constructor(private router: Router, private posts: PostsService, private user: UserService) { }  

  toPerfil(){
    this.router.navigate(['/perfil']);
  }
  toSeguidos(){
    this.router.navigate(['/perfil/seguidos']);
  }
  toSeguidores(){
    this.router.navigate(['/perfil/seguidores']);
  }

  listPostPropio: PostPropio[] = []
  ngOnInit(): void {
    this.getPostPropio();
  }
  getPostPropio(){
    const userId = Number(this.user.getUserId());
    console.log(userId)
    this.posts.getPostPropio(userId).subscribe(data => {
      this.listPostPropio = data;
      this.numPublicaciones = this.listPostPropio.length;
      console.log(this.listPostPropio);
      this.nombreUsuario = this.listPostPropio[0].nombreUsuario;
      this.idUsuario = `000 ${this.listPostPropio[0].idUser.toString()}`;
      this.contenidoPublicacion = this.listPostPropio[0].contenido
    })
  }

  

}
