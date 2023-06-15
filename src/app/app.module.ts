import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeworkComponent } from './wework/wework.component';
import { BarraMenuComponent } from './wework/components/barra-menu/barra-menu.component';
import { SeccionUnoComponent } from './wework/components/seccion-uno/seccion-uno.component';
import { SliderComponent } from './wework/components/seccion-uno/slider/slider.component';
import { SeccionDosComponent } from './wework/components/seccion-dos/seccion-dos.component';
import { SeccionTresComponent } from './wework/components/seccion-tres/seccion-tres.component';
import { SeccionCuatroComponent } from './wework/components/seccion-cuatro/seccion-cuatro.component';
import { SeccionCincoComponent } from './wework/components/seccion-cinco/seccion-cinco.component';
import { SeccionSeisComponent } from './wework/components/seccion-seis/seccion-seis.component';
import { SeccionSieteComponent } from './wework/components/seccion-siete/seccion-siete.component';
import { SeccionOchoComponent } from './wework/components/seccion-ocho/seccion-ocho.component';
import { SeccionNueveComponent } from './wework/components/seccion-nueve/seccion-nueve.component';
import { FootherComponent } from './wework/components/foother/foother.component';
import { ContenidoComponent } from './wework/components/seccion-dos/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    WeworkComponent,
    BarraMenuComponent,
    SeccionUnoComponent,
    SliderComponent,
    SeccionDosComponent,
    SeccionTresComponent,
    SeccionCuatroComponent,
    SeccionCincoComponent,
    SeccionSeisComponent,
    SeccionSieteComponent,
    SeccionOchoComponent,
    SeccionNueveComponent,
    FootherComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
