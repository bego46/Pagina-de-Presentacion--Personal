import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  public title = "Berlad Gonzalez Valenzuela";
  public separador : any;
  public data : any;
  public aptitudes : any;
  public pasatiempos : any;
  public idiomas : any;
  public imagen =  "assets/img/icon/ios-arrow-forward.svg";
 

  constructor() {

    this.separador = {
      _1: 'Descripcion',
      _2: 'Sobre Mi',
      _3: 'Estudios',
      _4: 'Acerca de'
    }

    this.data = [
      {
        title: "Nombre Completo",
        data : "Berlad Gonzalez Valenzuela",
      },
      {
        title: "edad",
        data : "22",
      },
      {
        title: "Fecha de cumpleaños",
        data : "17 de Enero",
      },
      {
        title: "Licencia de Conducción",
        data : "A2",
      },
      {
        title: "Libreta Militar",
        data : "Si",
      }
    ]

    this.aptitudes = [
      {
        title: "Dedicado",
        data: "Cuando me encuentro realizando cualquier tipo de actividad no me detengo hasta terminarla.",
      },
      {
        title: "Estudioso",
        data: "Considero que en el poco tiempo que tenemos debemos aprender lo mas que se pueda. Yo tomo las oportunidades que se me presentan para estudiar.",
      },
      {
        title: "Perseverante",
        data: "Cuando me encuentro estancado en algun problema, siempre tomo un momento y relajarme, para luego seguir adelante a pesar de las adversidades.",
      },
      {
        title: "Trabajo en equipo",
        data: "Cuando me encuentro en un trabajo en equipo siempre trato de que todos podamos aportar algo.",
      }
    ]

    this.idiomas = [
      {
        data: "Español.",
      },
      {
        data: "Ingles.",
      }
    ]

    this.pasatiempos = [
      {
        data: "Escuchar musica.",
      },
      {
        data: "Leer libros y mangas.",
      },
      {
        data: "Ver Anime, series y peliculas.",
      },
      {
        data: "Realizar diversos tipos de ejercicios fisicos.",
      }
    ]

   }

  ngOnInit(): void {
  }

  openSet( event ){
    console.log(event);
  }

}
