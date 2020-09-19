import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  public title = "Berlad Gonzalez Valenzuela";
  public separador : any;
  public contenido : any;
  public data : any;
  public imagen =  "assets/img/icon/ios-arrow-forward.svg";

  constructor() {

    this.separador = {
      _1: 'Descripcion',
      _2: 'Sobre Mi',
      _3: 'Estudios',
      _4: 'Acerca de'
    }
        
    this.contenido = [
      {
        tipo: "Gmail",
        name: "@Berlad46",
        data: "berlad46@gmail.com"
      },
      {
        tipo: "Celular",
        name: "trabajo",
        data: "311-736-9170"
      },
      {
        tipo: "Celular",
        name: "Movil",
        data: ""
      }
    ]

    this.data = [
      {
        href1: "https://www.flaticon.es/autores/pixel-perfect",
        name1: "Pixel perfect",
        href2: "https://www.flaticon.es/",
        name2: "Flaticon"
      },
      {
        href1: "https://www.flaticon.es/autores/freepik",
        name1: "Freepik",
        href2: "https://www.flaticon.es/",
        name2: "Flaticon"
      },
      {
        href1: "https://www.flaticon.es/autores/kiranshastry",
        name1: "Kiranshastry",
        href2: "https://www.flaticon.es/",
        name2: "Flaticon"
      }
    ]


   }

  ngOnInit(): void {
  }

}
