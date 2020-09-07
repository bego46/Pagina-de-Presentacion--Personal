import { Component, Renderer2, OnInit, NgModule } from '@angular/core';

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.component.html',
	styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

	public title : string;
	public datos: any;
	public contenido : any;
	public cursos : any;
	public separador : any;
	
	constructor(
			private renderer: Renderer2

		) { 

			this.separador = {
				_1: 'Descripcion',
				_2: 'Acerca de Mi',
				_3: 'Estudios',
				_4: 'Acerca de'
			}

			this.title = 'Berlad Gonzalez Valenzuela';

			this.datos = {
				nombre : "Berlad Gonzalez Valenzuela",
				edad : 22
			}

			this.contenido = [
				{
					titulo: "Facebook",
					nombre: "Desarrollos Berlad",
					href: "https://www.facebook.com/dberlad/"
				},
				{
					titulo: "Instagram",
					nombre: "@berlad66",
					href: "https://www.instagram.com/berlad66/?hl=es-la"
				},
				{
					titulo: "Gmail",
					nombre: "@Berlad46",
					email: "berlad46@gmail.com"
				},
				{
					titulo: "LinkedIn",
					nombre: "Berlad Gonzalez",
					href: "https://www.linkedin.com/in/berladGonzalez"
				},
				{
					titulo: "Celular",
					nombre: "311-736-9170"
				}
			]
			


			this.cursos = [
				{
					curso: "Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS",
					plataforma: "Udemy",
					link: "https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/",
					year: "2020"
				},
				{
					curso: "ionic 5: Crear aplicaciones IOS, Android y PWAs con Angular",
					plataforma: "Udemy",
					link: "https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/",
					year: "2020"
				},
				{
					curso: "Máster en Seguridad Informática. De 0 a Experto . Año 2020.",
					plataforma: "Udemy",
					link: "https://www.udemy.com/course/curso-completo-seguridad-informatica-achirou-chirou-alvaro/",
					year: "2020"
				},
				{
					curso: "Node: De cero a experto",
					plataforma: "Udemy",
					link: "https://www.udemy.com/course/node-de-cero-a-experto/",
					year: "2020"
				},
				{
					curso: "Metodologia de la Programacion de Sistemas informaticos",
					plataforma: "El Servicio Nacional de Aprendizaje Sena",
					link: "",
					year: "2016"
				},
				{
					curso: "Excel Intermedio",
					plataforma: "El Servicio Nacional de Aprendizaje Sena",
					link: "",
					year: "2016"
				},
				{
					curso: "Inglish Dot Works Beginner - Inglés ",
					plataforma: "El Servicio Nacional de Aprendizaje Sena",
					link: "",
					year: "2016"
				},
				{
					curso: "Photoshop Basico",
					plataforma: "El Servicio Nacional de Aprendizaje Sena",
					link: "",
					year: "2016"
				},
				{
					curso: "Avanzado Trabajo Seguro en Alturas",
					plataforma: "El Servicio Nacional de Aprendizaje Sena",
					link: "",
					year: "2016"
				}
			]
					// {
					// 	curso: "",
					// 	plataforma: "",
					// 	link: "",
					// 	year: ""
					// }
				
	}

	ngOnInit(): void {
	}

	

}
