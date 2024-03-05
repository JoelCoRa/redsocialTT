import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MensajeSidebarComponent } from '../../mensaje-sidebar/mensaje-sidebar.component';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [FooterComponent, RouterModule, NavbarComponent, MensajeSidebarComponent],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {

}
