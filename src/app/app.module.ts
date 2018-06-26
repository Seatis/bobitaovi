import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ColorBarComponent } from './component/color-bar/color-bar.component';
import { TopInfoBarComponent } from './component/top-info-bar/top-info-bar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BannerComponent } from './component/banner/banner.component';
import { SelectorComponent } from './component/selector/selector.component';
import { FeatureComponent } from './component/feature/feature.component';
import { PromotionComponent } from './component/promotion/promotion.component';
import { CoursesComponent } from './component/courses/courses.component';
import { TeachersComponent } from './component/teachers/teachers.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { CountUpComponent } from './component/count-up/count-up.component';
import { NewsComponent } from './component/news/news.component';
import { AddressComponent } from './component/address/address.component';
import { FooterComponent } from './component/footer/footer.component';
import { FooterInfoBarComponent } from './component/footer-info-bar/footer-info-bar.component';
import { CopyrightComponent } from './component/copyright/copyright.component';
import { PreloaderComponent } from './component/preloader/preloader.component';
import { AppRoutingModule } from './/app-routing.module';
import { BobitaComponent } from './ovoda/bobita/bobita.component';
import { AranyComponent } from './ovoda/arany/arany.component';
import { FejlesztoComponent } from './ovoda/fejleszto/fejleszto.component';
import { MainComponent } from './ovoda/main/main.component';

import {ExternaljsService} from './service/externaljs.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorBarComponent,
    TopInfoBarComponent,
    NavbarComponent,
    BannerComponent,
    SelectorComponent,
    FeatureComponent,
    PromotionComponent,
    CoursesComponent,
    TeachersComponent,
    GalleryComponent,
    CountUpComponent,
    NewsComponent,
    AddressComponent,
    FooterComponent,
    FooterInfoBarComponent,
    CopyrightComponent,
    PreloaderComponent,
    BobitaComponent,
    AranyComponent,
    FejlesztoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ExternaljsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
