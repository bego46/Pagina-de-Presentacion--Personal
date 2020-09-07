import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

	public contenido : any;
	public contenido_2 : any;

	constructor() {
		this.contenido = {
				nombre : "Berlad Gonzalez Valenzuela",
				edad : 22,
				email : "berlad46@gmail.com",
				facebook : "Berlad Gonzalez",
				instagram : "berlad66"
			}
		this.contenido_2 = {
			primaria : "Colegio La Estancia de Bosa / 2° - 5° / 2005 - 2008 ",
			bachillerato1 : "Institucion Educativa Gamaliel / 6° - 9° / 2016",
			bachillerato2 : "Enstitucion Educativa Jaime Leonel Perez Eslava / 10° / 2018"
		}
	}

	ngOnInit(): void {
	}

}
