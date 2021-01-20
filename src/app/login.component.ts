import { Component, OnInit } from '@angular/core';
import { FirebaseService} from './firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public auth: FirebaseService
  ) { }

  ngOnInit(): void {
  }

  public AuthEP(email: string, password: string){
    if (email !== '' && password !== '') {
      this.auth.logIn(email, password);
      window.setTimeout ( () => { window.location.reload(); }, 500);
    }
  }

}
