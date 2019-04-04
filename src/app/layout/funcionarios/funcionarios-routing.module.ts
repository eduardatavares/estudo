
import { Routes } from '@angular/router';
import { ListarFuncionariosComponent } from './listar-funcionarios/listar-funcionarios.component';
import { CadastroFuncionariosComponent } from './manter-funcionarios/funcionarios.component';


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
export class LayoutRoutingModule { }
