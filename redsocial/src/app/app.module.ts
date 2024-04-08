import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';

import { DashboardComponent } from "./components/secciones/dashboard/dashboard.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from "@angular/material/snack-bar";


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule, 
        ReactiveFormsModule,
        CommonModule,
        MatSnackBarModule,

    ],
    providers:[],
    bootstrap:[]

})

export class AppModule{ }