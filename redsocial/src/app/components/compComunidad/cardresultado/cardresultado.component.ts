import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cardresultado',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './cardresultado.component.html',
  styleUrl: './cardresultado.component.css'
})
export class CardresultadoComponent {

  nombreUsuario: string = "Nombre Usuario";

  descUsuario: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni facilis sunt odio accusamus? ";

}
