import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit {

  public title : any;
  public separador : any;
  public cursos : any;

  constructor() {
    
      this.title = 'Berlad Gonzalez Valenzuela';

			this.separador = {
				_1: 'Descripcion',
				_2: 'Sobre Mi',
				_3: 'Estudios',
				_4: 'Acerca de'
			}

      			
			this.cursos = [
				{
					logo: "assets/img/logos/html-5.svg",
					porcentage: "html",
					curso: "HTML5",
					plataforma: "Udemy",
					link: "",
					year: "2020"
				},
				{
					logo: "assets/img/logos/css.svg",
					porcentage: "css",
					curso: "CSS3 y SCSS",
					plataforma: "Udemy",
					link: "",
					year: "2020"
				},
				{
					logo: "assets/img/logos/javascript.svg",
					porcentage: "javascript",
					curso: "Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS",
					plataforma: "Udemy",
					link: "https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/",
					year: "2020"
				},
				{
					logo: "assets/img/icon/logo-angular.svg",
					porcentage: "angular",
					curso: "Angular",
					plataforma: "Udemy",
					link: "",
					year: "2020"
				},
				{
					logo: "assets/img/icon/logo-ionic.svg",
					porcentage: "ionic",
					curso: "ionic 5: Crear aplicaciones IOS, Android y PWAs con Angular",
					plataforma: "Udemy",
					link: "https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/",
					year: "2020"
				},
				{
					logo: "assets/img/logos/nodejs.svg",
					porcentage: "node",
					curso: "Node: De cero a experto",
					plataforma: "Udemy",
					link: "https://www.udemy.com/course/node-de-cero-a-experto/",
					year: "2020"
				},
				{
					logo: "assets/img/logos/seguridad.svg",
					porcentage: "seguridad",
					curso: "Máster en Seguridad Informática. De 0 a Experto . Año 2020.",
					plataforma: "Udemy",
					link: "https://www.udemy.com/course/curso-completo-seguridad-informatica-achirou-chirou-alvaro/",
					year: "2020"
				},
				{
					logo: "assets/img/logos/codificacion.svg",
					porcentage: "programacion",
					curso: "Metodologia de la Programacion de Sistemas informaticos",
					plataforma: "El Servicio Nacional de Aprendizaje Sena",
					link: "",
					year: "2016"
				},
				{
					logo: "assets/img/logos/osx.svg",
					porcentage: "excel",
					curso: "Excel Intermedio",
					plataforma: "El Servicio Nacional de Aprendizaje Sena",
					link: "",
					year: "2016"
				},
				{
					logo: "assets/img/logos/ingles.svg",
					porcentage: "ingles",
					curso: "Inglish Dot Works Beginner - Inglés ",
					plataforma: "El Servicio Nacional de Aprendizaje Sena",
					link: "",
					year: "2016"
				},
				{
					logo: "assets/img/logos/photoshop.svg",
					porcentage: "photoshop",
					curso: "Photoshop Basico",
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
