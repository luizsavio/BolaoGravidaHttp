import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

/**
 * Generated class for the BolaoInformacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bolao-informacao',
  templateUrl: 'bolao-informacao.html',
})
export class BolaoInformacaoPage {
  public bolao;
  public meupalpite;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
    this.bolao = navParams.data;
    console.log('bolao informaçao:', this.bolao);
    
  }

  participar() {
  }

  ionViewDidEnter() {
    
  }


  presentLoading(message) {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Alerta',
        subTitle: message,
        buttons: ['Fechar']
      });
      alert.present();
    });

    loading.present();
  }
}
