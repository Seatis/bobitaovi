import { Component, OnInit } from '@angular/core';

import { APP_JS } from '../../jsroutes'
import { ExternaljsService } from '../../service/externaljs.service';

@Component({
  selector: 'app-bobita',
  templateUrl: './bobita.component.html',
  styleUrls: ['./bobita.component.css']
})
export class BobitaComponent implements OnInit {

  constructor(private jsService: ExternaljsService) { }

  ngOnInit() {
    this.jsService.startLoadingJS([APP_JS]);
    const element = document.querySelector("#" + 'ourCourses');
    if (element) { element.scrollIntoView(true); }
  }

}
