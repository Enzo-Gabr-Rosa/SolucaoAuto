import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonButton, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { callOutline, chatbubbleOutline, cubeOutline, logoInstagram, logoWhatsapp, mailOutline, sparklesOutline } from 'ionicons/icons';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.page.html',
  styleUrls: ['./atendimento.page.scss'],
  imports: [IonContent, IonIcon, IonButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AtendimentoPage {

  constructor() {
    addIcons({ cubeOutline, sparklesOutline, chatbubbleOutline, logoWhatsapp, logoInstagram, mailOutline, callOutline})
   }


}
