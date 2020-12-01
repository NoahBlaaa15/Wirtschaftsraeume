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
    this.afs.collection(`${room}/`).doc('allgemein').update({ text, bild, datei });
  }

  public setEntstehung(room, text, bild, datei): void{
    this.afs.collection(`${room}/`).doc('entstehung').update({ text, bild, datei });
  }

  public setInfrastruktur(room, text, bild, datei): void{
    this.afs.collection(`${room}/`).doc('infrastruktur').update({ text, bild, datei });
  }

  public setUnternehmen(room, text, bild, datei): void{
    this.afs.collection(`${room}/`).doc('unternehmen').update({ text, bild, datei });
  }

}
