import {Component, Input, OnInit} from '@angular/core';
import {RaeumeService} from './raeume.service';
import {Observable} from 'rxjs';
import {MatDialog} from "@angular/material/dialog";
import {EditComponent} from "./edit.component";
import {ThemaComponent} from "./thema.component";

interface RaumObj {
  text: string;
  bild: string;
  datei: string;
}

@Component({
  selector: 'app-wirtschaftsraum',
  templateUrl: './wirtschaftsraum.component.html',
  styleUrls: ['./wirtschaftsraum.component.css']
})
export class WirtschaftsraumComponent implements OnInit {

  allgemein$: Observable<RaumObj>;
  entstehung$: Observable<RaumObj>;
  infrastruktur$: Observable<RaumObj>;
  unternehmen$: Observable<RaumObj>;

  @Input() raum: string;

  constructor(public r: RaeumeService,  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.allgemein$ = this.r.getAllgemein(this.raum);
    this.entstehung$ = this.r.getEntstehung(this.raum);
    this.infrastruktur$ = this.r.getInfastruktur(this.raum);
    this.unternehmen$ = this.r.getUnternehmen(this.raum);
  }

  public openLink(url: string){
    if (url !== '') {
      window.open(url, '_blank');
    }
  }

  public openBig(thema: Observable<RaumObj>, name: string){
    this.dialog.open(ThemaComponent, {
      data: {thema, name}
    });
  }
}
