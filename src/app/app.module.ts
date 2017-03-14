// Importaciones generales
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//import { MenuComponent} from './directiveComponent/menu.component';

// Importaciones Component Base
import { AppComponent }         from './app.component';

// Importaciones routing app

import {routing, appRoutingProviders} from './app.routing';

import { DashboardModule }     from './dashboard/dash.module';
import { LoginModule }     from './login/login.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    DashboardModule,
    LoginModule,
  ],
  declarations: [
  	AppComponent,
  ],
  providers: [
     appRoutingProviders,
   ],
  bootstrap: [ AppComponent ]
})



export class AppModule { }
