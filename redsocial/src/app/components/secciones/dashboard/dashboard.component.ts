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

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule, MensajeSidebarComponent, MatButtonModule, MatFormFieldModule, MatSelectModule, MatSidenavModule, SidebarComponent,MatCardModule, TituloSeccionComponent, ChatbotComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor (private router: Router){ }
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

}
