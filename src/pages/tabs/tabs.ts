import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { TierPage } from '../tierDisplay/tierDisplay'
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = TierPage;
  tab2Root = TierPage;
  tab3Root = TierPage;
  tab4Root = TierPage;
  termsRoot = AboutPage;
  loaded:   boolean = false;
  tabIndex: number  = 0;
  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions) {    
  }
  private getAnimationDirection(index):string {
    var currentIndex = this.tabIndex;

    this.tabIndex = index;

    switch (true){
      case (currentIndex < index):
        return('left');
      case (currentIndex > index):
        return ('right');
    }
  }

  public transition(e):void {    
    let options: NativeTransitionOptions = {
     direction:this.getAnimationDirection(e.index),
     duration: 1000,
     slowdownfactor: 1,
     slidePixels: 0,
     iosdelay: 20,
     androiddelay: 0,
     fixedPixelsTop: 0,
     fixedPixelsBottom: 48
    };

    if (!this.loaded) {
      this.loaded = true;
      return;
    }

    this.nativePageTransitions.slide(options);
  }
}
