import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, /*NavParams,*/ LoadingController, AlertController, App, Slides } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListaBolaoPage } from '../lista-bolao/lista-bolao';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-slider',
  templateUrl: 'login.html',
})
export class LoginPage {


  public backgroundImage = 'assets/img/background/background-6.jpg';
  loginForm: FormGroup;
  formSignup: FormGroup;
  formReset: FormGroup;
  usuario: any;
  public loader;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    public navCtrl: NavController,
    public storage: Storage,
    fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.formSignup = fb.group({
      nameSignUp: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      emailSignUp: ['', Validators.compose([Validators.required, Validators.email])],
      passwordSignUp: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      passwordSignUpConfirm: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.formReset = fb.group({
      emailReset: ['', Validators.compose([Validators.required, Validators.email])]
    });
    //console.log('carregando o login', authService.currentUser);



  }

  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  login() {
    let data = this.loginForm.value;
    this.presentLoading();
    if (!data.email) {
      return;
    }
    
  }

  ionViewDidEnter() {
  
  }

  signUp() {
    let data = this.formSignup.value;
    this.presentLoading();
    /*console.log("Senha:", data.passwordSignUp);
    console.log("Senha Confirmação:", data.passwordSignUpConfirm);*/
    if (!data.emailSignUp) {
      this.closingLoading();
      return;
    }
    if (data.passwordSignUp != data.passwordSignUpConfirm) {
      this.closingLoading();
      this.presentAlert('As senhas inseridas não conferem!');
      return;
    }

    
  }

  resetPassword() {
    let data = this.formReset.value;
    this.presentLoading();
    if (!data.emailReset) {
      this.closingLoading();
      return;
    }
  }

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(2);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  presentAlert(message) {
    const alert = this.alertCtrl.create({
      title: 'Alerta',
      subTitle: message,
      buttons: ['Fechar']
    });
    alert.present();
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