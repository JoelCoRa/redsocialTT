import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { BtnRegresarComponent } from '../btn-regresar/btn-regresar.component';
import { FormsModule } from '@angular/forms';
import { TituloComponent } from '../titulo/titulo.component';
import { EnviarComponent } from '../enviar/enviar.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports:[FooterComponent, RouterModule, BtnRegresarComponent, FormsModule, TituloComponent, EnviarComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  public sexo: string = '';

  constructor(private router: Router){ }

  sendMail(){
    console.log("Correo enviado");
  }

  tologin(){
    this.router.navigate(['/login']);
  }

}
