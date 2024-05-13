import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { MensajeSidebarComponent } from '../../mensaje-sidebar/mensaje-sidebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import { TituloSeccionComponent } from '../../titulo-seccion/titulo-seccion.component';
import { ChatbotComponent } from '../../chatbot/chatbot.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { PublicacionComponent } from "../../publicacion/publicacion.component";
import { MensajevacioComponent } from "../../mensajevacio/mensajevacio.component";
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { PostsService } from '../../../services/posts.service';
import { PostSeg } from '../../../interfaces/post';
import { inject, OnInit } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [NavbarComponent, FooterComponent, RouterModule, MensajeSidebarComponent, MatButtonModule, MatFormFieldModule, MatSelectModule, MatSidenavModule, SidebarComponent, MatCardModule, TituloSeccionComponent, ChatbotComponent, CommonModule, MensajevacioComponent, MatTooltipModule],
    providers:[]
})
export class DashboardComponent {

  usuarioPropio: string = "Usuario";
  numPublicaciones: number = 1;
  usuarioSeguido: string = "";
  contenido: string = ""
  fechaPublicacion: string = "";
  likes: number = 0;
  dislikes: number = 0;
  above: TooltipPosition = 'above';

  constructor (private router: Router, private user: UserService, private posts:PostsService ){ }
  showFiller = false;
  isRotated: boolean = false;
  isSelected: boolean = true;

  rotarImagen() {
    this.isRotated = !this.isRotated;
  }

  chatbot = new ChatbotComponent();
  toggleChat() {
    this.chatbot.isFullSize = true;
  }

  ngOnInit(): void {
    this.getUserId();
    this.getPostSeg();

  }

  listPostSeg: PostSeg[] = []
  fechasPublicacion: string = ''

  getUserId(): string | null{
    
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        console.log(decodedToken.idUser)
        return decodedToken.id;
      } catch (error) {
        console.error('Error decodificando el token:', error);
        return null;
      }
    }
    return null;
  }  

  getPostSeg() {    
    const userId = Number(this.user.getUserId()); 
    this.posts.getPostSeg(userId).subscribe(data => {    
      this.listPostSeg = data;
      console.log(this.listPostSeg)
      // this.usuarioPropio = this.listPostSeg[0].nombreUserSeguido;

      // // console.log(data[0].fechaPublicacion)
      // // console.log(this.listPostSeg);
      // this.numPublicaciones = this.listPostSeg.length
      // if(this.listPostSeg.length === 0){
      //   this.numPublicaciones = 0;
      // }
    });
  }







}
