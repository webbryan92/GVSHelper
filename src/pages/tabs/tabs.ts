import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { TierPage } from '../tierDisplay/tierDisplay'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = TierPage;
  tab2Root = TierPage;
  tab3Root = TierPage;
  tab4Root = TierPage;
  termsRoot = AboutPage;
  constructor() {    
  }
}
