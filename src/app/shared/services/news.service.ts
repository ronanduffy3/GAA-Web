import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Newsarticle } from '../services/newsarticle';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private fireStore: AngularFirestore) { }

  CreateArticle(article: Newsarticle){
    return this.fireStore.collection(`news`).add(article);
  }
}
