import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { APP_JS } from '../../jsroutes'
import { ExternaljsService } from '../../service/externaljs.service';

@Component({
  selector: 'app-bobita',
  templateUrl: './bobita.component.html',
  styleUrls: ['./bobita.component.css']
})
export class BobitaComponent implements OnInit {

  constructor(private jsService: ExternaljsService, private router: Router) { 
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        console.log('Ez az url ', router.url)
        console.log('Ez a fragment ', tree.fragment);
        if (tree.fragment) {
          this.scrollTo(tree.fragment);
        }
        
        
        // setTimeout(function(){ const element = document.querySelector('#ourTeam');
        // console.log(element); element.scrollIntoView(true); }, 1000);

      }
    });
    
  }

  ngOnInit() {
    this.jsService.startLoadingJS([APP_JS]).then(() => {
      // const element = document.querySelector('#ourTeam');
      // element.scrollIntoView(true);
      // console.log('JS LOADED')});
      

      
    // const element = document.querySelector("#" + 'ourCourses');
    // if (element) { element.scrollIntoView(true); }
    // setTimeout(function(){ const element = document.querySelector('#ourTeam');
    //     console.log(element); element.scrollIntoView(true); }, 1000);

    });
  }

  scrollTo(targetID) {
    setTimeout(function(){ const element = document.querySelector('#' + targetID);
    element.scrollIntoView(true); }, 100);
  }

  

}
