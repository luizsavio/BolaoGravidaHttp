import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';

/**
 * Generated class for the BolaoEditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bolao-editar',
  templateUrl: 'bolao-editar.html',
})
export class BolaoEditarPage {

  public nome: string;
  public data;
  public editarForm: FormGroup;
  public bolao: any;
  loader: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public fb: FormBuilder) {
    this.editarForm = fb.group({
      nomeGravida: ['', Validators.compose([Validators.required])],
      dataNascimento: ['']
    });
    this.bolao = navParams.data;

    this.nome = this.bolao.nomeGravida;
    (this.bolao.dataNascimento) ? this.data = this.bolao.dataNascimento : null;

  }

  salvar() {
    let data = this.editarForm.value;
    this.presentLoading();
    let lista = new Array();

    for (let itemparticipante of this.bolao.bolaoparticipantes.participantes) {
      var dataPalpite = new Date(itemparticipante.dataPalpite);
      var dataNascimento = new Date(data.dataNascimento);
      var timeDiff = Math.abs(dataNascimento.getTime() - dataPalpite.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      itemparticipante['dias'] = diffDays;
      lista.push(itemparticipante);
    }
    let n = Number.MAX_VALUE;
    let objetoMenor;
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].dias < n) {
        n = lista[i].dias;
        objetoMenor = lista[i];
      }
    }
    console.log('dias', lista);
    console.log('objeto menor', objetoMenor);
    if (data.dataNascimento != null) {
      
    } else {
      let objEditado = {
        nomeGravida: data.nomeGravida
      }
    }
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
      }
      ]
    });
    alert.present();
  }
}
