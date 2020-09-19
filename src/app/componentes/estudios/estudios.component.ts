import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit {

  public title = "Berlad Gonzalez Valenzuela";
  public separador : any;
  public cursos : any;

  constructor() {
    
			this.separador = {
				_1: 'Descripcion',
				_2: 'Sobre Mi',
				_3: 'Estudios',
				_4: 'Acerca de'
			}

      			
			this.cursos = [
				{
					title: "html 5",
					logo: "assets/img/logos/html-5.svg",
					text: "Estudiado en el cursos de JavaScript en la plataforma digital de",
					curso: "HTML5",
					link: "https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/",
					textLink: "Udemy.",
					p: "html"
				},
				{
					title: "css",
					logo: "assets/img/logos/css.svg",
					text: "Estudiado en el cursos de JavaScript en la plataforma digital de",
					curso: "CSS3 y SCSS",
					link: "https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/",
					textLink: "Udemy.",
					p: "css"
				},
				{
					title: "JavaScript",
					logo: "assets/img/logos/javascript.svg",
					text: "Estudidado en la plataforma digital de",
					curso: "Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS",
					link: "https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/",
					textLink: "Udemy.",
					p: "javascript"
				},
				{
					title: "Angular",
					logo: "assets/img/icon/logo-angular.svg",
					text: "Estudiado en el cursos de JavaScript en la plataforma digital de",
					curso: "Angular",
					link: "https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/",
					textLink: "Udemy.",
					p: "angular"
				},
				{
					title: "Ionic 5",
					logo: "assets/img/icon/logo-ionic.svg",
					text: "Estudidando actualmente en la plataforma digital",
					curso: "ionic 5: Crear aplicaciones IOS, Android y PWAs con Angular",
					link: "https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/",
					textLink: "Udemy.",
					p: "ionic"
				},
				{
					title: "node js",
					logo: "assets/img/logos/nodejs.svg",
					text: "Estudidando actualmente en la plataforma digital",
					curso: "Node: De cero a experto",
					link: "https://www.udemy.com/course/node-de-cero-a-experto/",
					textLink: "Udemy.",
					p: "node"
				},
				{
					title: "Seguridad Informática",
					logo: "assets/img/logos/seguridad.svg",
					text: "Estudidando actualmente en la plataforma digital",
					curso: "Máster en Seguridad Informática. De 0 a Experto . Año 2020.",
					link: "https://www.udemy.com/course/curso-completo-seguridad-informatica-achirou-chirou-alvaro/",
					textLink: "Udemy.",
					p: "seguridad"
				},
				{
					title: "Programacion",
					logo: "assets/img/logos/codificacion.svg",
					text: "Estudiado y certificado en la plataforma digital de",
					curso: "Metodologia de la Programacion de Sistemas informaticos",
					link: "http://oferta.senasofiaplus.edu.co/sofia-oferta/",
					textLink: "El Servicio Nacional de Aprendizaje Sena.",
					p: "programacion"
				},
				{
					title: "Excel",
					logo: "assets/img/logos/osx.svg",
					text: "Estudiado y certificado en la plataforma digital de",
					curso: "Excel Intermedio",
					link: "http://oferta.senasofiaplus.edu.co/sofia-oferta/",
					textLink: "El Servicio Nacional de Aprendizaje Sena.",
					p: "excel"
				},
				{
					title: "Inglés",
					logo: "assets/img/logos/ingles.svg",
					text: "Estudiado y certificado en la plataforma digital de",
					curso: "Inglish Dot Works Beginner - Inglés ",
					link: "http://oferta.senasofiaplus.edu.co/sofia-oferta/",
					textLink: "El Servicio Nacional de Aprendizaje Sena.",
					p: "ingles",
				},
				{
					title: "Photoshop",
					logo: "assets/img/logos/photoshop.svg",
					text: "Estudiado y certificado en la plataforma digital de",
					curso: "Photoshop Basico",
					link: "http://oferta.senasofiaplus.edu.co/sofia-oferta/",
					textLink: "El Servicio Nacional de Aprendizaje Sena.",
					p: "photoshop"
				}
			]
					// {
					// 	curso: "",
					// 	text: "",
					// 	link: "",
					// 	textLink: ""
					// }


   }
  

  ngOnInit(): void {
  }

}
