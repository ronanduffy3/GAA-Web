import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NewsService } from 'src/app/shared/services/news.service';
import { User } from 'src/app/shared/services/user';
import { Newsarticle } from '../../shared/services/newsarticle';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  displayName = JSON.parse(localStorage.getItem('user'));

  constructor(public authService: AuthService, public newsService: NewsService) { }

  newArticle = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    creator: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.newArticle.controls[`creator`].setValue(this.displayName[`displayName`]);
  }

  create(article: Newsarticle) {
    this.newsService.CreateArticle(article);
  }

}
