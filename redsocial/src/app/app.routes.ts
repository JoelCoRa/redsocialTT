import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';

import { DashboardComponent } from './components/secciones/dashboard/dashboard.component';
import { ProfileComponent } from './components/secciones/profile/profile.component';
import { ComunityComponent } from './components/secciones/comunity/comunity.component';
import { ForumComponent } from './components/secciones/forum/forum.component';
import { ResourcesComponent } from './components/secciones/resources/resources.component';
import { SettingsComponent } from './components/secciones/settings/settings.component';
import { ContactComponent } from './components/secciones/contact/contact.component';
import { HelpComponent } from './components/secciones/help/help.component';

export const routes: Routes = [
    {path: '',component: LoginComponent, pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signin', component: SignInComponent},
    {path: 'recpassword', component: RecuperarPasswordComponent},
    {path: 'inicio', component: DashboardComponent},
    {path: 'perfil', component: ProfileComponent},
    {path: 'comunidad', component: ComunityComponent},
    {path: 'foros', component: ForumComponent},
    {path: 'recursos', component: ResourcesComponent},
    {path: 'ajustes', component: SettingsComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'ayuda', component: HelpComponent}

];
