import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonIcon, IonTabs, IonTabButton, IonTabBar, IonLabel } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, headsetOutline, bookOutline, cartOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet, IonIcon, IonTabs, IonTabButton, IonTabBar, IonLabel],
})
export class AppComponent {
  constructor() {
    addIcons({ homeOutline, headsetOutline, bookOutline, cartOutline, personOutline })
  }
}
