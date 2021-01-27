import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Newsarticle } from '../services/newsarticle';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsCollection: AngularFirestoreCollection<Newsarticle>;
  newsItems: Observable<any[]>;

  constructor(private fireStore: AngularFirestore) {
    this.newsItems = this.fireStore.collection('news').valueChanges();
   }

  CreateArticle(article: Newsarticle) {
    return this.fireStore.collection(`news`).add(article);
  }

  getArticles(){
    return this.newsItems;
  }


}
