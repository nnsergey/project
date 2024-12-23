import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnterComponent } from './enter/enter.component';
import { RegistrationComponent } from './registration/registration.component';


export const routes: Routes = [
        { path: 'home-component', component: HomeComponent },
        { path: 'enter-component', component: EnterComponent },
        { path: 'registration-component', component: RegistrationComponent },
      ];

