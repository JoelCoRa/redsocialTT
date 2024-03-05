import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { TituloComponent } from '../titulo/titulo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent,RouterModule, TituloComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router){ }

  tosignIn(){
    this.router.navigate(['/signin']);
  }
  torecPassword(){
    this.router.navigate(['/recpassword']);
  }

}
