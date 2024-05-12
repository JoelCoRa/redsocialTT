import { Component } from '@angular/core';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { TituloSeccionComponent } from "../../titulo-seccion/titulo-seccion.component";
import { FooterComponent } from "../../footer/footer.component";
import { NavbarComponent } from "../../navbar/navbar.component";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BtnRegresarComponent } from '../../btn-regresar/btn-regresar.component';
import { BtnregresarportalComponent } from '../../btnregresarportal/btnregresarportal.component';

@Component({
    selector: 'app-crearforo',
    standalone: true,
    templateUrl: './crearforo.component.html',
    styleUrl: './crearforo.component.css',
    imports: [SidebarComponent, TituloSeccionComponent, FooterComponent, NavbarComponent, MatCardModule, MatFormFieldModule, CommonModule, FormsModule, RouterModule, BtnregresarportalComponent]
})
export class CrearforoComponent {
    etiquetaIngresada: string = '';
    etiquetas: string[] = [];
    contador: number = 0;


    manejarKeyPress(event: KeyboardEvent): void {
        if (event.key === 'Enter' && this.etiquetas.length < 3 && this.etiquetaIngresada.trim() !== '') {
            if (this.etiquetaIngresada.trim() !== '' && this.contador < 3) {
                this.etiquetas.push(this.etiquetaIngresada);
                this.etiquetaIngresada = ''; // Limpiar el campo de entrada
                this.contador++;                
              }
              
        }
    }

    quitarEtiqueta(index: number): void{
        this.etiquetas.splice(index, 1);
        this.contador--;
    }
    deshabilitado(): boolean{
        return this.contador === 3;
    }

}
