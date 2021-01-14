import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Observable} from 'rxjs';

interface RaumObj {
  text: string;
  bild: string;
  datei: string;
}

@Component({
  selector: 'app-thema',
  templateUrl: './thema.component.html',
  styleUrls: ['./thema.component.css']
})
export class ThemaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {thema: Observable<RaumObj>, name: string}) { }

  ngOnInit(): void {
  }

  public openLink(url: string){
    if (url !== '') {
      window.open(url, '_blank');
    }
  }

}
