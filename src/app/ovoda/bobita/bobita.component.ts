import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { APP_JS } from '../../jsroutes'
import { ExternaljsService } from '../../service/externaljs.service';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'app-bobita',
  templateUrl: './bobita.component.html',
  styleUrls: ['./bobita.component.css']
})
export class BobitaComponent implements OnInit {

  constructor(private jsService: ExternaljsService, private navbarService: NavbarService) { 
    
    
  }

  ngOnInit() {
    this.jsService.startLoadingJS([APP_JS]).then(() => {
      this.navbarService.setBobita();
    });
  }

  

}
