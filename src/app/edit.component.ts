import {Component, Inject, OnInit} from '@angular/core';
import {UpdateService} from './update.service';
import {RaeumeService} from './raeume.service';
import {Observable} from 'rxjs';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

interface RaumObj {
  text: string;
  bild: string;
  datei: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  allgemein$: Observable<RaumObj>;
  entstehung$: Observable<RaumObj>;
  infrastruktur$: Observable<RaumObj>;
  unternehmen$: Observable<RaumObj>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {room: string}, public u: UpdateService, public r: RaeumeService) { }

  ngOnInit(): void {
    this.allgemein$ = this.r.getAllgemein(this.data.room);
    this.entstehung$ = this.r.getEntstehung(this.data.room);
    this.infrastruktur$ = this.r.getInfastruktur(this.data.room);
    this.unternehmen$ = this.r.getUnternehmen(this.data.room);
  }

}
