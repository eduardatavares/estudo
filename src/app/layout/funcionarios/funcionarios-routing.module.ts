
import { Routes } from '@angular/router';
import { CadastroFuncionariosComponent } from './funcionarios/manter-funcionarios/funcionarios.component';
import { ListarFuncionariosComponent } from './funcionarios/listar-funcionarios/listar-funcionarios.component';



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
