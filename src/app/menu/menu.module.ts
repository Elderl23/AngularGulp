// Importaciones generales
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { MenuComponent} from '../menu/menu.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
    MenuComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [MenuComponent]
})



export class MenuModule { }
