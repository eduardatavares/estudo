import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './layout/login/login/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
    {
        path: 'login',
        loadChildren: './layout/login/login.module#LoginModule',

    },
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
    }  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

