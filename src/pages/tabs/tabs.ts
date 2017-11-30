import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TermsPage } from '../terms/terms';
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
  termsRoot = TermsPage;
  constructor() {    
  }
}
