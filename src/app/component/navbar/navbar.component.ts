import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(router: Router) {
    // router.events.subscribe(s => {
    //   console.log(s)
    //   if (s instanceof NavigationEnd) {
    //     const tree = router.parseUrl(router.url);
    //     console.log('Ez az url ', router.url)
    //     console.log('Ez a fragment ', tree.fragment);
    //     // const element = document.querySelector('#ourTeam');
    //     // console.log(element)
    //     // element.scrollIntoView(true);
        
    //     // setTimeout(function(){ const element = document.querySelector('#ourTeam');
    //     // console.log(element); element.scrollIntoView(true); }, 3000);

    //   }
    // });
  }

  ngOnInit() {
    
  }

  moveMe() {
    const element = document.querySelector('#ourTeam');
    console.log(element)
  }

}
