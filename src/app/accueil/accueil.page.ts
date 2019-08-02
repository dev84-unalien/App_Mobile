import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  connected = false;

  constructor(public nav: NavController) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.connected = localStorage.connection == 'true';
  }

}
