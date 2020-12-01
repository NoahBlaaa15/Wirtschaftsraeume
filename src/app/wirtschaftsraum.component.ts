import {Component, Input, OnInit} from '@angular/core';
import {RaeumeService} from './raeume.service';
import {Observable} from 'rxjs';

interface RaumObj {
  text: string;
  bild: string;
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

  constructor(public r: RaeumeService) { }

  ngOnInit(): void {
    this.allgemein$ = this.r.getAllgemein(this.raum);
    this.entstehung$ = this.r.getEntstehung(this.raum);
    this.infrastruktur$ = this.r.getInfastruktur(this.raum);
    this.unternehmen$ = this.r.getUnternehmen(this.raum);
  }


}
