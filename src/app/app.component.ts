import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

declare var cordova: any;
import * as marketo from "MarketoPlugin/www/marketo.js";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.marketoInitialize();
      this.marketoInitializePushNotification();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // public loadScript() {
  //   let node = document.createElement("script");
  //   node.src = environment.logintr;
  //   node.async = true;
  //   node.charset = "utf-8";
  //   document.getElementsByTagName("head")[0].appendChild(node);
  // }

  marketoInitialize() {
    //This method will Initialize the Marketo Framework using Your MunchkinId and Secret Key
    marketo.initialize(
      function() { console.log("MarketoSDK Init done."); },
      function(error) { console.log("an error occurred:" + error); },
      '39337e1c-3796-4b3e-85f1-0a509a9e31d9',
      '9D6S7eeZog85wLMDdHpbmmddJBGWU0Dh'
    );
    
    // For session tracking, add following. 
    marketo.onStart(
      function(){ console.log("onStart."); },
      function(error){ console.log("Failed to report onStart." + error); }
    );
  }

  marketoInitializePushNotification(){
    marketo.initializeMarketoPush(
      function() { console.log("Marketo push successfully initialized."); },
      function(error) { console.log("an error occurred:" + error); },
      'YOUR_GCM_PROJECT_ID' 
    );
  }
}
