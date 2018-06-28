import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  selectedOvi: string;

  constructor(private navbarService: NavbarService) {

  }

  ngOnInit() {
    this.navbarService.selectedOvoda.subscribe(selected => {
      console.log(selected);
      this.selectedOvi = selected;
    });
  }


}
