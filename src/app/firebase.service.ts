import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
    ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        return this.afs.collection('users/').doc(user.uid).valueChanges();
      })
    );
  }

  async logIn(email, password) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
    console.log(this.user$);
  }

  async logOut() {
    this.user$ = null;
    await this.afAuth.signOut();
  }


}
