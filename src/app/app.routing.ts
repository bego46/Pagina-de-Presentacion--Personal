
// Modelos y Rutas
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { InicioComponent } from './componentes/inicio/inicio.component';

import { ErrorComponent } from './componentes/error/error.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EfectosComponent } from './componentes/efectos/efectos.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';

// Definiendo rutas
const appRoutes: Routes = [
	{path: '', component: InicioComponent},
	{path: 'inicio', component: InicioComponent},
	{path: 'sobre-mi', component: SobreMiComponent},
	{path: 'estudios', component: EstudiosComponent},
	{path: 'acerca-de', component: AcercaDeComponent},
	{path: 'efectos', component: EfectosComponent},
	{path: '**', component: ErrorComponent}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders =RouterModule.forRoot(appRoutes);