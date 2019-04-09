import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../inicio/inicio/inicio.component';
import { ErroComponent } from './erro/erro.component';

const routes: Routes = [

  {
    path: '',
    component: ErroComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErroRoutingModule { }
