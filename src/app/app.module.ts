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

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    /*ListaBolaoPage,
    CriarBolaoPage,
    PerfilPage,
    TabsbolaoPage,*/
    BolaoEditarPage,
    BolaoPalpitePage,
    BolaoInformacaoPage,
    BolaoParticipantesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Voltar',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      mode: 'ios'
    }),
    //IonicModule.forRoot(MyApp),
    //AngularFireModule.initializeApp(FIREBASE_CONFIG), 
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
