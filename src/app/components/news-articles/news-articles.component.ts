import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/services/news.service';
import { Newsarticle } from '../../shared/services/newsarticle';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.css']
})
export class NewsArticlesComponent implements OnInit {

  articles: Newsarticle[];

  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getArticles().subscribe(articlesList => {
      console.log(articlesList);
      this.articles = articlesList;
    });
  }

}
