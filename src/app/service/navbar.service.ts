import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NavbarService {

  public selectedOvoda: Subject<any> = new Subject<any>();

  constructor() { }

  setBobita() {
    this.selectedOvoda.next('bobita');
  }

  setArany() {
    this.selectedOvoda.next('arany');
  }

  setFejleszto() {
    this.selectedOvoda.next('fejleszto');
  }

  setDefault() {
    this.selectedOvoda.next('default');
  }
}
