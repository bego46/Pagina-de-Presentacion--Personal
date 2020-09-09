import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from './app.routing'

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { EfectosComponent } from './componentes/efectos/efectos.component';
import { AcordionModule } from './modules/acordion/acordion.module';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ErrorComponent,
    EfectosComponent,
    SobreMiComponent,
    AcercaDeComponent,
    EstudiosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AcordionModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
