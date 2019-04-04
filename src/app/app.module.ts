import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
=======
import { NgModule } from '@angular/core';
>>>>>>> 7487a024d2e279d1830bc164849a3a61b10ec219

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthGuardService } from './guards/auth-guard.service';
import { RoutingModule } from './app-routing-module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
