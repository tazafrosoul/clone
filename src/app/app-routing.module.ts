import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';

const routes: Routes = [

  {path:'home', component:TopheadingComponent}, //home news
  {path:'tech', component:TechnewsComponent}, //technologies news
  {path:'business', component:BusinessnewsComponent}, //business news
  {path:'sports', component:SportsnewsComponent}, //sports news

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
