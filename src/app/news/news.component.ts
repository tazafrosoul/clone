import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}

// NEWS OBJECT
// news{
//   ID,
//   title,
//   news_body,
//   image_link,
//   location,
//   news_category,
//   news_type,
//   author,
//   date_created,
// }