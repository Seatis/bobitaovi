import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-info-bar',
  templateUrl: './top-info-bar.component.html',
  styleUrls: ['./top-info-bar.component.css']
})
export class TopInfoBarComponent implements OnInit {

  actualDate: string;
  options: object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  constructor() { }

  ngOnInit() {
    this.actualDate = (new Date().toLocaleDateString('hu-HU', this.options)).replace(',', ' ');
  }
}
