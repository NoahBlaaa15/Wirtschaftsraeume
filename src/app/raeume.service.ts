import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class RaeumeService {

  constructor(private afs: AngularFirestore) { }

  public getAllgemein(room): Observable<any>{
    // this.afs.collection(`${room}/`).doc('allgemein').set({ text: '', bild: '', datei: '' });
    return this.afs.collection(`${room}/`).doc('allgemein').valueChanges();
  }

  public getEntstehung(room): Observable<any>{
    // this.afs.collection(`${room}/`).doc('entstehung').set({ text: '', bild: '', datei: '' });
    return this.afs.collection(`${room}/`).doc('entstehung').valueChanges();
  }

  public getInfastruktur(room): Observable<any>{
    // this.afs.collection(`${room}/`).doc('infrastruktur').set({ text: '', bild: '', datei: '' });
    return this.afs.collection(`${room}/`).doc('infrastruktur').valueChanges();
  }

  public getUnternehmen(room): Observable<any>{
    // this.afs.collection(`${room}/`).doc('unternehmen').set({ text: '', bild: '', datei: '' });
    return this.afs.collection(`${room}/`).doc('unternehmen').valueChanges();
  }
}
