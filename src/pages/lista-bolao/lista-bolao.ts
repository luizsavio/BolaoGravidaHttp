import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { CriarBolaoPage } from '../criar-bolao/criar-bolao';
import { TabsbolaoPage } from '../tabsbolao/tabsbolao';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ListaBolaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-bolao',
  templateUrl: 'lista-bolao.html',
})
export class ListaBolaoPage {
  public meusboloes;
  loader: any;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }


  criarBolao() {
    this.navCtrl.push(CriarBolaoPage.name);
  }

  carregarBoloes() {
    this.meusboloes = new Array();
  }

  selecionaBolao(bolao) {
    this.navCtrl.push(TabsbolaoPage.name, { bolaoSelecionando: bolao });
  }

  ionViewDidLoad() {
      this.presentLoading();
      this.carregarBoloes();
      this.closingLoading();
    
  }

  get UsuarioLogado() {
    return null;
    /*if(this.authservice.authState != null){
      return this.authservice.currentUser;
    }*/

  }

  sair() {
    this.navCtrl.setRoot(LoginPage)
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();
  }

  closingLoading() {
    this.loader.dismiss();
  }

  presentAlert(message) {
    const alert = this.alertCtrl.create({
      title: 'Alerta',
      subTitle: message,
      buttons: ['Fechar']
    });
    alert.present();
  }

}
