import { Component, OnInit } from '@angular/core';

import { APP_JS } from '../../jsroutes'
import { ExternaljsService } from '../../service/externaljs.service';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'app-arany',
  templateUrl: './arany.component.html',
  styleUrls: ['./arany.component.css']
})
export class AranyComponent implements OnInit {

  constructor(private jsService: ExternaljsService, private navbarService: NavbarService) { }

  ngOnInit() {
    this.jsService.startLoadingJS([APP_JS]).then(() => {
      this.navbarService.setArany();
    });
  }

}
