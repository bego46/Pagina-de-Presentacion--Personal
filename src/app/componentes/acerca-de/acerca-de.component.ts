import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  public title : string;
  public separador : any;
  public contenido : any;


  constructor() {
    this.title = 'Berlad Gonzalez Valenzuela';

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
        name: "Celular",
        tipo: "movil",
        data: ""
      }
    ]


   }

  ngOnInit(): void {
  }

}
