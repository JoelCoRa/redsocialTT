import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-crearpublicacion',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule],
  templateUrl: './crearpublicacion.component.html',
  styleUrl: './crearpublicacion.component.css'
})
export class CrearpublicacionComponent {

}
