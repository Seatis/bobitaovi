import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { APP_JS } from '../../jsroutes'
import { ExternaljsService } from '../../service/externaljs.service';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private jsService: ExternaljsService, private navbarService: NavbarService) {
  }

  ngOnInit() {
    this.jsService.startLoadingJS([APP_JS]).then(() => {
      this.navbarService.setDefault();
    });
  }

}
