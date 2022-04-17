import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from "./material/material.module";

import { NewsComponent } from './news/news.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { TechnewsComponent } from './technews/technews.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsapiservicesService } from './service/newsapiservices.service';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    SportsnewsComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule,
    LoadingBarHttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent],
  exports: [
    
  ]
})
export class AppModule { }
