import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { RouterModule } from '@angular/router';
import { MensajeSidebarComponent } from '../../mensaje-sidebar/mensaje-sidebar.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { TituloSeccionComponent } from '../../titulo-seccion/titulo-seccion.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-comunity',
  standalone: true,
  imports: [FooterComponent, RouterModule, MensajeSidebarComponent, NavbarComponent, SidebarComponent, TituloSeccionComponent, MatCardModule, CommonModule],
  templateUrl: './comunity.component.html',
  styleUrl: './comunity.component.css'
})
export class ComunityComponent {

}
