import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import * as firebase from 'firebase';

const  firebaseConfig = {
  apiKey: "AIzaSyBT8kacfD_SYp8Ei6TBcUEFlxnDK3GtYc0",
  authDomain: "businesscontacts-94792.firebaseapp.com",
  databaseURL: "https://businesscontacts-94792.firebaseio.com",
  storageBucket: "businesscontacts-94792.appspot.com"
}

firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
