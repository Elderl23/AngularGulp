// Importaciones generales
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { MenuModule} from '../menu/menu.module';


// Importaciones routing app
import { LoginRoutingModule }     from './login-routing.module';

// Component
import { LoginComponent } from './login.component';

// Service
import { LoginService } from './login.service';



@NgModule({
  imports: [
    MenuModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    LoginService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})



export class LoginModule { }
