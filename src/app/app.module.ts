import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { InicioComponent } from './inicio/inicio.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { RoutingModule } from './app-routing-module';
import { TesteComponent } from './teste/teste.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    TesteComponent,
    LayoutComponent,


  ],

  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
