import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { RouterModule } from '@angular/router';
import { MensajeSidebarComponent } from '../../mensaje-sidebar/mensaje-sidebar.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { TituloSeccionComponent } from '../../titulo-seccion/titulo-seccion.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { BarrabusquedaComponent } from "../../barrabusqueda/barrabusqueda.component";
import { CardresultadoComponent } from "../../compComunidad/cardresultado/cardresultado.component";
import { MensajevacioComponent } from "../../mensajevacio/mensajevacio.component";


@Component({
    selector: 'app-comunity',
    standalone: true,
    templateUrl: './comunity.component.html',
    styleUrl: './comunity.component.css',
    imports: [FooterComponent, RouterModule, MensajeSidebarComponent, NavbarComponent, SidebarComponent, TituloSeccionComponent, MatCardModule, CommonModule, BarrabusquedaComponent, CardresultadoComponent, MensajevacioComponent]
})
export class ComunityComponent {
    numResultados: number = 1;

}
