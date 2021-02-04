import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Team } from '../services/team'

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  teamsCollection: Observable<any[]>

  constructor(private afs: AngularFirestore) { 
    this.teamsCollection = this.afs.collection(`Teams`).valueChanges();
  }

  getArticle(){
    return this.teamsCollection;
  }


}
