import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MensajeSidebarComponent } from '../../mensaje-sidebar/mensaje-sidebar.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { TituloSeccionComponent } from '../../titulo-seccion/titulo-seccion.component';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [FooterComponent, RouterModule, NavbarComponent, MensajeSidebarComponent, SidebarComponent, MatCardModule, TituloSeccionComponent],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {

}
