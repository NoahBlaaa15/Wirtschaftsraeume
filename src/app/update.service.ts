import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  // const tutRef= db.doc('tutorial');
  // tutRef.update({ url: 'bezkoder.com/zkoder-tutorial' });

  constructor(private afs: AngularFirestore) { }


  public setAllgemein(room, text, bild, datei): void{
    const tutRef = this.afs.collection(`${room}/`).doc('allgemein');
    tutRef.update({ text, bild, datei });
  }

  public setEntstehung(room, text, bild, datei): void{

  }

  public setInfastruktur(room, text, bild, datei): void{

  }

  public setUnternehmen(room, text, bild, datei): void{

  }

}
