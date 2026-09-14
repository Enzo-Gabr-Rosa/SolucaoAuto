import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonIcon, IonContent } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowForwardOutline, bookOutline, addOutline, imageOutline, callOutline, flag, image, locationOutline, logoInstagram, logoWhatsapp, mailOutline, phonePortraitOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonIcon, IonContent, RouterLink],
})
export class HomePage {
  readonly products = [
    { name: 'CERA PROTECT SHINE', category: 'Proteção e brilho', price: 'R$ 49,90' },
    { name: 'SHAMPOO NEUTRO 500ML', category: 'Lavagem automotiva', price: 'R$ 34,90' },
    { name: 'PRETINHO BLACK TIRE', category: 'Pneus e acabamento', price: 'R$ 29,90' },
    { name: 'KIT LAVAGEM ESSENCIAL', category: 'Kit em oferta', price: 'R$ 89,90' },
  ];

  constructor() {
    addIcons({ flag, image, bookOutline, addOutline, imageOutline, arrowForwardOutline, callOutline, logoWhatsapp, logoInstagram, mailOutline, locationOutline, phonePortraitOutline });
  }
}
