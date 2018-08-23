import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

/**
 * Generated class for the BolaoPalpitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bolao-palpite',
  templateUrl: 'bolao-palpite.html',
})
export class BolaoPalpitePage {
  public data: string; /*= new Date().toISOString();*/
  public palpiteForm: FormGroup;
  public bolao: any;
  public dataAtual = new Date().toISOString();
  loader: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public fb: FormBuilder) {
    this.palpiteForm = fb.group({
      dataPalpite: ['', Validators.compose([Validators.required])]
    });
    this.bolao = navParams.data;
    /*for (const item of this.bolao.bolaoparticipantes.participantes) {
      if (item.idUsuario == authService.currentUser.uid) {
        (item.dataPalpite != null) ? this.data = item.dataPalpite : '';
      }
    }*/
  }
  palpitar() {
    let data = this.palpiteForm.value;
    this.presentLoading();
    this.closingLoading();
    
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Salvando..."
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
      buttons: [{
        text: 'Fechar'
      }]
    });
    alert.present();
  }
}
