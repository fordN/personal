import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HeroheadlineComponent } from './firstpage/heroheadline/heroheadline.component';
import { TextsummaryComponent } from './firstpage/textsummary/textsummary.component';
import { AdventureComponent } from './firstpage/adventure/adventure.component';
import { SvgartComponent } from './firstpage/svgart/svgart.component';
import { SvganimatetoComponent } from './firstpage/svgart/svganimateto/svganimateto.component';
import { FooterComponent } from './firstpage/footer/footer.component';
import { DatavizComponent } from './firstpage/dataviz/dataviz.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    HeroheadlineComponent,
    TextsummaryComponent,
    AdventureComponent,
    SvgartComponent,
    SvganimatetoComponent,
    DatavizComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    ScrollToModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
