import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { RelatorioComponent } from '../relatorio/relatorio.component';

const routes: Routes = [
  { path: 'relatorio', component: RelatorioComponent },
  {
    path: '',
    redirectTo: 'relatorio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
