import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MensajeSidebarComponent } from '../mensaje-sidebar/mensaje-sidebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FooterComponent } from '../footer/footer.component';
import { EnviarComponent } from '../enviar/enviar.component';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatButtonModule, RouterModule, MatFormFieldModule, MatSidenavModule, MensajeSidebarComponent, FooterComponent, EnviarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor (private router: Router){ }
  showFiller = false;

  isRotated: boolean = false;

 
  

  rotarImagen() {
    this.isRotated = !this.isRotated;
  }

}
