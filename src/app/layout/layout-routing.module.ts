
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';

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
      {
        path: 'erro',
        loadChildren: './erros/erros.module#ErrosModule'
      }

    ]
  },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
