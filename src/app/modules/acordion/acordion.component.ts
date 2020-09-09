import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordion',
  template: `
    <div> <ng-content select="app-acordion-item"></ng-content> </div>
  `,
  styleUrls: ['./acordion.component.css']
})
export class AcordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 