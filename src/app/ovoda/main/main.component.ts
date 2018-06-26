import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { APP_JS } from '../../jsroutes'
import { ExternaljsService } from '../../service/externaljs.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private jsService: ExternaljsService, router: Router) {
    // router.events.subscribe(s => {
    //   if (s instanceof NavigationEnd) {
    //     const tree = router.parseUrl(router.url);
    //     if (tree.fragment) {
    //       const element = document.querySelector("#" + tree.fragment);
    //       if (element) { element.scrollIntoView(true); }
    //     }
    //   }
    // });
  }

  ngOnInit() {
    this.jsService.startLoadingJS([APP_JS]);
  }

}
