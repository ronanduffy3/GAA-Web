import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'
import { Observable, Subject  } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { Team } from '../services/team';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  teamsCollection: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.teamsCollection = this.afs.collection(`Teams`).valueChanges();
  }

  getTeams() {
    return this.teamsCollection;
  }

  getPlayers(team: any) {
    const team$ = new Subject<string>();
    const queryObservable = team$.pipe(
      switchMap(teams =>
        this.afs.collection('Teams', ref => ref.where('Name', '==', team)).valueChanges())
    );
    return queryObservable;
  }


}
