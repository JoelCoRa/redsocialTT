import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TituloSeccionComponent } from '../titulo-seccion/titulo-seccion.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderperfilComponent } from "../compPerfil/headerperfil/headerperfil.component";
import { CrearpublicacionComponent } from "../crearpublicacion/crearpublicacion.component";
import { PublicacionpropiaComponent } from "../compPerfil/publicacionpropia/publicacionpropia.component";
import { CommonModule } from '@angular/common';
import { CuentasComponent } from "../compPerfil/cuentas/cuentas.component";



@Component({
    selector: 'app-seguidos',
    standalone: true,
    templateUrl: './seguidos.component.html',
    styleUrl: './seguidos.component.css',
    imports: [MatButtonToggleModule, TituloSeccionComponent, NavbarComponent, SidebarComponent, FooterComponent, HeaderperfilComponent, CrearpublicacionComponent, PublicacionpropiaComponent, CommonModule, CuentasComponent]
})
export class SeguidosComponent {
  nombreUsuario: string = "Usuario";
  idUsuario: string = "0000000";

  constructor(private router: Router) { }


  numSeguidos: number = 1;

  

  toPerfil(){
    this.router.navigate(['/perfil']);
  }
  toSeguidos(){
    this.router.navigate(['/perfil/seguidos']);

  }
  toSeguidores(){
    this.router.navigate(['/perfil/seguidores']);
  }
}
