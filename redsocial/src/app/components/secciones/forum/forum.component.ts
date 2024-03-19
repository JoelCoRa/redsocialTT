import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { MensajeSidebarComponent } from '../../mensaje-sidebar/mensaje-sidebar.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { TituloSeccionComponent } from '../../titulo-seccion/titulo-seccion.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MensajeSidebarComponent, RouterModule, SidebarComponent, TituloSeccionComponent, MatCardModule],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent {

}
