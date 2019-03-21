import { Routes, RouterModule } from '@angular/router'
import { TesteComponent } from '../teste/teste.component';
import { InicioComponent } from '../inicio/inicio.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  
    {
        path: '',
        component: InicioComponent
    },
    
    {
        path: '/teste',
        component: TesteComponent,
        canActivate: [AuthGuardService],
    }   
];
export const RoutingModule = RouterModule.forRoot(routes);