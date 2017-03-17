// Importaciones generales
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';





import { MenuModule} from '../menu/menu.module';

// Validator
import { ControlMessagesComponent } from '../service/validator/control-messages.component';
import { ValidationService } from '../service/validator/validation.service';
// Validator

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
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent,
    ControlMessagesComponent,
  ],
  providers: [
    LoginService,
    ValidationService,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})



export class LoginModule { }
