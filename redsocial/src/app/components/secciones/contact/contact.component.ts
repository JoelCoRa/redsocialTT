import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MensajeSidebarComponent } from '../../mensaje-sidebar/mensaje-sidebar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, RouterModule, MensajeSidebarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
