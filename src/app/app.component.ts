import { Component, inject } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonIcon,
  IonTabs,
  IonTabButton,
  IonTabBar,
  IonLabel
} from '@ionic/angular';

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

import { addIcons } from 'ionicons';

import {
  homeOutline,
  headsetOutline,
  bookOutline,
  cartOutline,
  personOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonApp,
    IonRouterOutlet,
    IonIcon,
    IonTabs,
    IonTabButton,
    IonTabBar,
    IonLabel
  ],
})
export class AppComponent {

  mostrarNavbar = true;

  private router = inject(Router);

  constructor() {

    addIcons({
      homeOutline,
      headsetOutline,
      bookOutline,
      cartOutline,
      personOutline
    });

    // Verifica a rota inicial imediatamente
    this.atualizarNavbar(this.router.url);

    // Atualiza quando a navegação mudar
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.atualizarNavbar(event.urlAfterRedirects);
      });

  }

  private atualizarNavbar(url: string) {
    this.mostrarNavbar = !url.startsWith('/autenticacao');
  }

}