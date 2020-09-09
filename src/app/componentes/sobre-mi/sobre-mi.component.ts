import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  public title : any;
  public separador : any;
  public datos : any

  constructor() {

    this.title = 'Berlad Gonzalez Valenzuela';

    this.separador = {
      _1: 'Descripcion',
      _2: 'Sobre Mi',
      _3: 'Estudios',
      _4: 'Acerca de'
    }

    this.datos = {
      nombre : "Berlad Gonzalez Valenzuela",
      edad : 22
    }

   }

  ngOnInit(): void {
  }

  openSet( event ){
    console.log(event);
  }

}
