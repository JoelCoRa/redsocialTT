import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { RouterModule } from '@angular/router';
import { MensajeSidebarComponent } from '../../mensaje-sidebar/mensaje-sidebar.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-comunity',
  standalone: true,
  imports: [FooterComponent, RouterModule, MensajeSidebarComponent, NavbarComponent],
  templateUrl: './comunity.component.html',
  styleUrl: './comunity.component.css'
})
export class ComunityComponent {

}
