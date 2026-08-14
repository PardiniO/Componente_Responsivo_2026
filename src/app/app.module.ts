import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploComponent  } from "./component/ejemplo/ejemplo.component";
import { LogoComponent } from './component/encabezado/logo/logo.component';
import { LeyendaComponent } from './component/encabezado/leyenda/leyenda.component';
import { HeaderComponent } from './component/encabezado/header/header.component';
import { DataUsuarioComponent } from './component/encabezado/data-usuario/data-usuario.component';
import { Encabezado2Component } from './component/output-ejemplo/encabezado2/encabezado2.component';
import { Leyenda2Component } from './component/output-ejemplo/leyenda2/leyenda2.component';
import { Hijo2Component } from './component/output-ejemplo/hijo2/hijo2.component';
import { ComponentePadreComponent } from './component/comunicacion2/componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './component/comunicacion2/componente-hijo/componente-hijo.component';
import { PadreDirectoComponent } from './component/comunicacion-directa/padre-directo/padre-directo.component';
import { HijoDirectoComponent } from './component/comunicacion-directa/hijo-directo/hijo-directo.component';


@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    LogoComponent,
    LeyendaComponent,
    HeaderComponent,
    DataUsuarioComponent,
    Encabezado2Component,
    Leyenda2Component,
    Hijo2Component,
    ComponentePadreComponent,
    ComponenteHijoComponent,
    PadreDirectoComponent,
    HijoDirectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
