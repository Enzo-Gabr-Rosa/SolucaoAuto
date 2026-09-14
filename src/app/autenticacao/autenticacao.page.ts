import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonIcon,
  IonButton,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  arrowForwardOutline,
  eyeOutline,
  eyeOffOutline,
  lockClosedOutline,
  mailOutline,
  personOutline,
  logoGoogle
} from 'ionicons/icons';


@Component({

  selector: 'app-autenticacao',

  templateUrl: './autenticacao.page.html',

  styleUrls: ['./autenticacao.page.scss'],

  imports: [
    IonContent,
    IonIcon,
    IonButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ]

})


export class AutenticacaoPage implements OnInit {

  // =========================================================
  // MODO DA PÁGINA
  // =========================================================

  modo: 'login' | 'cadastro' = 'login';


  // =========================================================
  // LOGIN
  // =========================================================

  loginEmail: string = '';

  loginSenha: string = '';

  mostrarSenhaLogin: boolean = false;


  // =========================================================
  // CADASTRO
  // =========================================================

  nome: string = '';

  cadastroEmail: string = '';

  cadastroSenha: string = '';

  confirmarSenha: string = '';

  mostrarSenhaCadastro: boolean = false;

  mostrarConfirmarSenha: boolean = false;

  aceitarTermos: boolean = false;


  constructor() {

    addIcons({
      arrowForwardOutline,
      eyeOutline,
      eyeOffOutline,
      lockClosedOutline,
      mailOutline,
      personOutline,
      logoGoogle
    });

  }


  ngOnInit() {

  }


  // =========================================================
  // ALTERAR ENTRE LOGIN E CADASTRO
  // =========================================================

  mudarModo(modo: 'login' | 'cadastro') {

    this.modo = modo;

  }


  // =========================================================
  // MOSTRAR / OCULTAR SENHA
  // =========================================================

  alternarSenhaLogin() {

    this.mostrarSenhaLogin = !this.mostrarSenhaLogin;

  }


  alternarSenhaCadastro() {

    this.mostrarSenhaCadastro = !this.mostrarSenhaCadastro;

  }


  alternarConfirmarSenha() {

    this.mostrarConfirmarSenha = !this.mostrarConfirmarSenha;

  }


  // =========================================================
  // LOGIN
  // =========================================================

  entrar() {

    console.log('Tentativa de login:', {
      email: this.loginEmail,
      senha: this.loginSenha
    });

  }


  entrarComGoogle(){
    
  }

  // =========================================================
  // CADASTRO
  // =========================================================

  cadastrar() {

    if (!this.nome || !this.cadastroEmail || !this.cadastroSenha || !this.confirmarSenha) {

      console.log('Preencha todos os campos.');

      return;

    }


    if (this.cadastroSenha !== this.confirmarSenha) {

      console.log('As senhas não coincidem.');

      return;

    }


    if (!this.aceitarTermos) {

      console.log('É necessário aceitar os termos.');

      return;

    }


    console.log('Cadastro:', {

      nome: this.nome,

      email: this.cadastroEmail,

      senha: this.cadastroSenha

    });

  }


}