import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cuentas-seguidores',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './cuentas-seguidores.component.html',
  styleUrl: './cuentas-seguidores.component.css'
})
export class CuentasSeguidoresComponent {
  cuenta: string = "Cuenta Seguida/Seguidor";

  seguido: boolean = false;
}
