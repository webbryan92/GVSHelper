import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TermsPage } from '../pages/terms/terms';
import { TermsDisplayPage } from '../pages/termsDisplay/termsDisplay';
import { TabsPage } from '../pages/tabs/tabs';
import { TierPage } from '../pages/tierDisplay/tierDisplay';
import { SuitPage } from '../pages/suitDisplay/suitDisplay';
import { HPPage } from '../pages/health/health';

import { SuitGridItemComponent } from '../components';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@NgModule({
  declarations: [
    MyApp,
    TermsPage,
    TierPage,
    SuitPage,
    TabsPage,
    TermsDisplayPage,
    HPPage,
    SuitGridItemComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TermsPage,
    TierPage,
    SuitPage,
    TabsPage,
    TermsDisplayPage,
    HPPage,
    SuitGridItemComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativePageTransitions
  ]
})
export class AppModule {}
