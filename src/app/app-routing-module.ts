import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
    }  
 
];
export const RoutingModule = RouterModule.forRoot(routes);