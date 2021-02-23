import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Fixture } from '../services/fixture';


@Injectable({
  providedIn: 'root'
})
export class FixturesService {

  fixturesCollection: AngularFireList<Fixture>;

  constructor(private fireStore: AngularFirestore, private angularFireDatabase: AngularFireDatabase) {
    this.fixturesCollection = this.angularFireDatabase.list(`fixture`);
   }

   getFixtures() {
    return this.fixturesCollection;
   }
}
