
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular';


import {
  addIcons
} from 'ionicons';

import {
  person,
  mailOutline,
  createOutline,
  heart,
  cartOutline,
  notifications,
  timeOutline,
  settings
} from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    CommonModule,
    FormsModule
  ]
})
export class PerfilPage {

  constructor() {

    addIcons({
      person,
      mailOutline,
      createOutline,
      heart,
      cartOutline,
      notifications,
      timeOutline,
      settings
    });

  }

}