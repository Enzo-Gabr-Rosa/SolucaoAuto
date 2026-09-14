import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonButton, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addOutline, cartOutline, imageOutline, logoWhatsapp, removeOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  imports: [IonContent, IonIcon, IonButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CarrinhoPage implements OnInit {

  constructor() { 
    addIcons({ removeOutline, addOutline, cartOutline, imageOutline, trashOutline, logoWhatsapp })
  }

  ngOnInit() {
  }

}
