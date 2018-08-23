import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bolao-participantes',
  templateUrl: 'bolao-participantes.html',
})
export class BolaoParticipantesPage {

  public bolao;
  public listaParticipantes;
  loader: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {
    this.bolao = navParams.data;
    this.listaParticipantes = new Array();
    console.log('o que veio do volao pgparticipantes:', this.bolao);
  }

  ionViewDidEnter() {
    this.presentLoading();
    this.carregarParticipantes();
    this.closingLoading();
  }

  carregarParticipantes() {
    /*for (const item of this.bolao.bolaoparticipantes.participantes) {
      this.firestoreService.receberUmDocumento('usuario', item.idUsuario)
        .then((obj) => {
          let objeto = obj.data();
          objeto['dataPalpite'] = item.dataPalpite;
          this.listaParticipantes.push(objeto)
        })
    }*/
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
}
