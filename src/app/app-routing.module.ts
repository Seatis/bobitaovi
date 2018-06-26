import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import {MainComponent} from './ovoda/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
    RouterModule.forChild(routes),
    FormsModule
    ],
  exports: [ RouterModule ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]  
})
export class AppRoutingModule { }
