import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { MensajeSidebarComponent } from '../../mensaje-sidebar/mensaje-sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MensajeSidebarComponent, RouterModule],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent {

}
