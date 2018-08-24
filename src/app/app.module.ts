import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { BolaoEditarPage } from '../pages/bolao-editar/bolao-editar';
import { BolaoPalpitePage } from '../pages/bolao-palpite/bolao-palpite';
import { BolaoInformacaoPage } from '../pages/bolao-informacao/bolao-informacao';
import { BolaoParticipantesPage } from '../pages/bolao-participantes/bolao-participantes';
import { UsuarioServiceProvider } from '../providers/usuario-service/usuario-service';
import { ApiProvider } from '../providers/api/api';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    BolaoEditarPage,
    BolaoPalpitePage,
    BolaoInformacaoPage,
    BolaoParticipantesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Voltar',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      mode: 'ios'
    }),
    IonicStorageModule.forRoot({
      name: 'firebaseLocalStorageDb',
      storeName: 'firebaseLocalStorage',
      driverOrder: ['indexeddb', 'websql']  
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    BolaoEditarPage,
    BolaoPalpitePage,
    BolaoInformacaoPage,
    BolaoParticipantesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioServiceProvider,
    ApiProvider
  ]
})
export class AppModule {}
