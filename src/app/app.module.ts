import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
