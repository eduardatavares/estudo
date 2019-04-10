
import { Routes, RouterModule } from '@angular/router';
import { CadastroFuncionariosComponent } from './funcionarios/manter-funcionarios/funcionarios.component';
import { ListarFuncionariosComponent } from './funcionarios/listar-funcionarios/listar-funcionarios.component';
import { NgModule } from '@angular/core';



const routes: Routes = [

  {
    path: '',
    component: ListarFuncionariosComponent,

  },
  {
    path: 'cadastro',
    component: CadastroFuncionariosComponent,

  },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
