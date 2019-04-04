
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: './inicio/inicio.module#InicioModule'
      },
      {
        path: 'funcionarios',
        loadChildren: './funcionarios/funcionarios.module#FuncionariosModule'
      },



    ]
  },

]
export class LayoutRoutingModule { }
