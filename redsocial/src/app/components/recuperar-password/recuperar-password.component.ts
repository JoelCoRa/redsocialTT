import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { BtnEnviarComponent } from '../botones/btn-enviar/btn-enviar.component';
import { BtnRegresarComponent } from '../botones/btn-regresar/btn-regresar.component';
import { TituloComponent } from '../titulo/titulo.component';

@Component({
  selector: 'app-recuperar-password',
  standalone: true,
  imports: [FooterComponent,RouterModule, BtnEnviarComponent, BtnRegresarComponent, TituloComponent],
  templateUrl: './recuperar-password.component.html',
  styleUrl: './recuperar-password.component.css'
})
export class RecuperarPasswordComponent {

  constructor(private router: Router){ }


  sendMail(){
    console.log("Correo enviado");
  } 

  tologin(){
    this.router.navigate(['/login']);
  }
  

}
