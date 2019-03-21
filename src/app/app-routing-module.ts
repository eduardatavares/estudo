import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  
    {
        path: '',
        component: LoginComponent
    },
    
    {
        path: 'inicio',
        component: InicioComponent,
        canActivate: [AuthGuardService],
    }   
];
export const RoutingModule = RouterModule.forRoot(routes);