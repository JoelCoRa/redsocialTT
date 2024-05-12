import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuentas',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './cuentas.component.html',
  styleUrl: './cuentas.component.css'
})
export class CuentasComponent {
  cuenta: string = "Cuenta Seguida/Seguidor";

  seguido: boolean = true;

}
