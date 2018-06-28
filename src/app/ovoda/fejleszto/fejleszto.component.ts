import { Component, OnInit } from '@angular/core';

import { APP_JS } from '../../jsroutes'
import { ExternaljsService } from '../../service/externaljs.service';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'app-fejleszto',
  templateUrl: './fejleszto.component.html',
  styleUrls: ['./fejleszto.component.css']
})
export class FejlesztoComponent implements OnInit {

  constructor(private jsService: ExternaljsService, private navbarService: NavbarService) { }

  ngOnInit() {
    this.jsService.startLoadingJS([APP_JS]).then(() => {
      this.navbarService.setFejleszto();
    });
  }

}
