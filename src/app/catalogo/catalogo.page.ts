import { Component } from '@angular/core';
import { IonButton, IonCheckbox, IonContent, IonIcon, IonItem, IonLabel, IonSearchbar, IonSelect, IonSelectOption } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addOutline, arrowForwardOutline, filterOutline, flag, gridOutline, imageOutline } from 'ionicons/icons';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  imports: [IonButton, IonCheckbox, IonContent, IonIcon, IonItem, IonLabel, IonSearchbar, IonSelect, IonSelectOption]
})
export class CatalogoPage {
  readonly categories = ['TODOS OS PRODUTOS', 'CERAS E PROTEÇÃO', 'LAVAGEM', 'PNEUS E ACABAMENTO', 'ACESSÓRIOS'];
  readonly products = [
    { name: 'CERA PROTECT SHINE', category: 'Ceras e proteção', price: 'R$ 49,90' }, { name: 'SHAMPOO NEUTRO 500ML', category: 'Lavagem', price: 'R$ 34,90' }, { name: 'PRETINHO BLACK TIRE', category: 'Pneus e acabamento', price: 'R$ 29,90' }, { name: 'REVITALIZADOR DE PLÁSTICOS', category: 'Acabamento', price: 'R$ 39,90' },
    { name: 'LIMPA VIDROS CRISTAL', category: 'Lavagem', price: 'R$ 24,90' }, { name: 'CERA LÍQUIDA BRILHO MAX', category: 'Ceras e proteção', price: 'R$ 44,90' }, { name: 'APLICADOR DE ESPUMA', category: 'Acessórios', price: 'R$ 12,90' }, { name: 'PANO DE MICROFIBRA', category: 'Acessórios', price: 'R$ 19,90' },
    { name: 'DESENGRAXANTE MULTIUSO', category: 'Lavagem', price: 'R$ 32,90' }, { name: 'LIMPA PNEUS PREMIUM', category: 'Pneus e acabamento', price: 'R$ 37,90' }, { name: 'CERA EM PASTA PRO', category: 'Ceras e proteção', price: 'R$ 59,90' }, { name: 'KIT ESTÉTICA ESSENCIAL', category: 'Kits', price: 'R$ 89,90' },
  ];

  constructor() {
    addIcons({ addOutline, arrowForwardOutline, filterOutline, flag, gridOutline, imageOutline });
  }
}
