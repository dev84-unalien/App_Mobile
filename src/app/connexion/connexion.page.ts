import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  pseudoEmail: any;
  password: any;

  constructor(public nav: NavController) {}

  ngOnInit() {}
  connexion() {
    if (this.pseudoEmail && this.password) {
      if (this.password.length < 8) {
        alert('Le mot de passe doit contenir au moins 8 caracteres');
      } else {
        localStorage.connection = true;
        this.nav.navigateForward('accueil');
      }
    } else {
      alert('Email ou mot de passe manquant !');
    }
  }

}
