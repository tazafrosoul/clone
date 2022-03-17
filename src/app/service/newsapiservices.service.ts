import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  // import the trendings newsapi
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2d243b6b9e5c4753a331e2965babfd74";

  // importimg the tech news Api
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=2d243b6b9e5c4753a331e2965babfd74";
 
  // importing the business news Api
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2d243b6b9e5c4753a331e2965babfd74";

  // importing the sports news api
  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=2d243b6b9e5c4753a331e2965babfd74";


  // importing the entertainment news api
  // entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=2d243b6b9e5c4753a331e2965babfd74";


  // topheading view 
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  // tech news view
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  // business news view
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

  // sports news view
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsApiUrl);
  }


  // entertainment news api
  // entertainmentNews():Observable<any>
  // {
  //   return this._http.get(this.entertainmentApiUrl);
  // }

}
