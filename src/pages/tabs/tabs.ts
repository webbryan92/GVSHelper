import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { TierPage } from '../tierDisplay/tierDisplay';

@Component({
  selector: "tabs-page",
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
  constructor(public navCtrl: NavController) {    
  }
}
