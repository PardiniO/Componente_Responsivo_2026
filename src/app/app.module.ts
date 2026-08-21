import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploComponent  } from "./ejercicios-clase/component/ejemplo/ejemplo.component";
import { LogoComponent } from './ejercicios-clase/component/encabezado/logo/logo.component';
import { LeyendaComponent } from './ejercicios-clase/component/encabezado/leyenda/leyenda.component';
import { HeaderComponent } from './ejercicios-clase/component/encabezado/header/header.component';
import { DataUsuarioComponent } from './ejercicios-clase/component/encabezado/data-usuario/data-usuario.component';
import { Encabezado2Component } from './ejercicios-clase/component/output-ejemplo/encabezado2/encabezado2.component';
import { Leyenda2Component } from './ejercicios-clase/component/output-ejemplo/leyenda2/leyenda2.component';
import { Hijo2Component } from './ejercicios-clase/component/output-ejemplo/hijo2/hijo2.component';
import { ComponentePadreComponent } from './ejercicios-clase/component/comunicacion2/componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './ejercicios-clase/component/comunicacion2/componente-hijo/componente-hijo.component';
import { PadreDirectoComponent } from './ejercicios-clase/component/comunicacion-directa/padre-directo/padre-directo.component';
import { HijoDirectoComponent } from './ejercicios-clase/component/comunicacion-directa/hijo-directo/hijo-directo.component';
import { ModalComponentComponent } from './trabajo-practico-1/1-modal-reutilizable/components/modal-component/modal-component.component';
import { TurnoComponent } from './trabajo-practico-1/1-modal-reutilizable/components/turno/turno.component';
import { PacienteComponent } from './trabajo-practico-1/1-modal-reutilizable/components/paciente/paciente.component';
import { SesionComponent } from './trabajo-practico-1/1-modal-reutilizable/components/sesion/sesion.component';
import { AgendaDiaComponent } from './trabajo-practico-1/2-tarjetas/components/agenda-dia/agenda-dia.component';
import { TurnoCardComponent } from './trabajo-practico-1/2-tarjetas/components/turno-card/turno-card.component';

import { WizardComponent } from './trabajo-practico-1/3-wizard/components/wizard/wizard.component';
import { AltaTurnosComponent } from "./trabajo-practico-1/3-wizard/components/pasos-wizard/alta-turnos/alta-turnos.component";
import { PacienteWizardComponent } from "./trabajo-practico-1/3-wizard/components/pasos-wizard/paciente-wizard/paciente.component";
import { HorarioComponent } from './trabajo-practico-1/3-wizard/components/pasos-wizard/horario/horario.component';
import { EspecialidadProfecionalComponent } from './trabajo-practico-1/3-wizard/components/pasos-wizard/especialidad-profecional/especialidad-profecional.component';
import { ConfirmacionComponent } from './trabajo-practico-1/3-wizard/components/pasos-wizard/confirmacion/confirmacion.component';
import { PanelColapsableComponent } from './trabajo-practico-1/4-panel/components/panel-colapsable/panel-colapsable.component';
import { FichaPacienteComponent } from './trabajo-practico-1/4-panel/components/ficha-paciente/ficha-paciente.component';


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
    HijoDirectoComponent,
    ModalComponentComponent,
    TurnoComponent,
    PacienteComponent,
    SesionComponent,
    AgendaDiaComponent,
    TurnoCardComponent,
    WizardComponent,
    EspecialidadProfecionalComponent,
    HorarioComponent,
    ConfirmacionComponent,
    AltaTurnosComponent,
    PacienteWizardComponent,
    PanelColapsableComponent,
    FichaPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
