// Modelos y Rutas
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { InicioComponent } from './componentes/inicio/inicio.component';

import { ErrorComponent } from './componentes/error/error.component';
import { EfectosComponent } from './componentes/efectos/efectos.component';

// Definiendo rutas
const appRoutes: Routes = [
	{path: '', component: EfectosComponent},
	{path: 'inicio', component: InicioComponent},
	{path: 'efectos', component: EfectosComponent},
	{path: '**', component: ErrorComponent}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders =RouterModule.forRoot(appRoutes);