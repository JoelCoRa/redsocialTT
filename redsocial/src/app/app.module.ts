import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { DashboardComponent } from "./components/secciones/dashboard/dashboard.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule, 
        ReactiveFormsModule
    ],
    providers:[],
    bootstrap:[]

})

export class AppModule{ }