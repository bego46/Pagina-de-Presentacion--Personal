import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-efectos',
  templateUrl: './efectos.component.html',
  styleUrls: ['./efectos.component.css']
})
export class EfectosComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {

    if (window.location.href.indexOf('efectos')> -1) {
      $("#acordeon").accordion();
    }
  }


}


