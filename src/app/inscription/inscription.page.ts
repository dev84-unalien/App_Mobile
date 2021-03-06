import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  pseudo: any;
  mail: any;
  password: any;
  pays: any;

  constructor(public nav:NavController) {}
  ngOnInit() {}

  connexion() {
    if (this.pseudo && this.mail && this.password && this.pays) {
      if (this.password.length < 8) {
        alert('Le mot de passe doit contenir au moins 8 caracteres');
      } else {
        localStorage.connection = true;
        this.nav.navigateForward('accueil');
      }
    } else {
      alert('Tout les champs doivent être remplis');
    }
  }
}
