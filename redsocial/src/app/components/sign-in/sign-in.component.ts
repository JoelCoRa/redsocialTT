import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { BtnEnviarComponent } from '../botones/btn-enviar/btn-enviar.component';
import { BtnRegresarComponent } from '../botones/btn-regresar/btn-regresar.component';
import { FormsModule } from '@angular/forms';
import { TituloComponent } from '../titulo/titulo.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports:[FooterComponent, RouterModule, BtnEnviarComponent, BtnRegresarComponent, FormsModule, TituloComponent],
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
