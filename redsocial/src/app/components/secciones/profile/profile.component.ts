import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { RouterModule } from '@angular/router';
import { MensajeSidebarComponent } from '../../mensaje-sidebar/mensaje-sidebar.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { TituloSeccionComponent } from '../../titulo-seccion/titulo-seccion.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FooterComponent, RouterModule, MensajeSidebarComponent, NavbarComponent, SidebarComponent, MatCardModule, TituloSeccionComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
