import { Injectable } from '@angular/core';

@Injectable()
export class ExternaljsService {

  loadAPI: Promise<any>;

  constructor() { 
  }

  public startLoadingJS(scripts: string[] = []) {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript(scripts);
      resolve(true);
    });
    return this.loadAPI;
  }
  
  public loadScript(dynamicScripts) {        

    for (var i = 0; i < dynamicScripts.length; i++) {
      let node = document.createElement('script');
      node.src = dynamicScripts [i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    } 
  }

}
