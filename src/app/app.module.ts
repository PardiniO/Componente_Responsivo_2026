import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploComponent  } from "./component/ejemplo/ejemplo.component";
import { LogoComponent } from './component/encabezado/logo/logo.component';
import { LeyendaComponent } from './component/encabezado/leyenda/leyenda.component';
import { HeaderComponent } from './component/encabezado/header/header.component';
import { DataUsuarioComponent } from './component/encabezado/data-usuario/data-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    LogoComponent,
    LeyendaComponent,
    HeaderComponent,
    DataUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
