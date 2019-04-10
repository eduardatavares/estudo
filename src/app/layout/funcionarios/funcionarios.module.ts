import { NgModule } from '@angular/core';
import { ListarFuncionariosComponent } from './funcionarios/listar-funcionarios/listar-funcionarios.component';
import { CadastroFuncionariosComponent } from './funcionarios/manter-funcionarios/funcionarios.component';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';



@NgModule({
  declarations: [
    ListarFuncionariosComponent,
    CadastroFuncionariosComponent
  ],

  imports: [
    FuncionariosRoutingModule


  ],
  providers: []

})
export class FuncionariosModule { }
