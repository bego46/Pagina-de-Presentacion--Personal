import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acordion-item',
  templateUrl: './acordion-item.component.html',
  styleUrls: ['./acordion-item.component.css']
})
export class AcordionItemComponent implements OnInit {

  @Input() title: string;
  showBody = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showBody = !this.showBody;
  }

}
