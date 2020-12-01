import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from './login.component';
import { FirebaseService} from './firebase.service';
import {EditComponent} from './edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    public dialog: MatDialog,
    public auth: FirebaseService,
  ) { }

  public TabIndex = 0;

  public openEdit(room){
    this.dialog.open(EditComponent, {
      data: {room}
    });
  }

  public openLogin(){
    this.dialog.open(LoginComponent);
  }

}
