import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Newsarticle } from '../services/newsarticle';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsCollection: AngularFireList<Newsarticle>;

  constructor(private fireStore: AngularFirestore, private angularFireDatabase: AngularFireDatabase) {
    this.newsCollection = this.angularFireDatabase.list(`NewTable`)
   }

  CreateArticle(article: Newsarticle) {
    return this.fireStore.collection(`news`).add(article);
  }

  CreateArticleRT(article: Newsarticle){
    return this.newsCollection.push(article);
  }

  getArticles(){
    return this.newsCollection;
  }


}
