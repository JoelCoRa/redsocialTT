import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { BtnRegresarComponent } from '../btn-regresar/btn-regresar.component';
import { TituloComponent } from '../titulo/titulo.component';
import { EnviarComponent } from '../enviar/enviar.component';

@Component({
  selector: 'app-recuperar-password',
  standalone: true,
  imports: [FooterComponent,RouterModule, BtnRegresarComponent, TituloComponent, EnviarComponent],
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
