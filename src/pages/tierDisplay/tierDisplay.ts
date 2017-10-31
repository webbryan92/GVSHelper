import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'tierDisplay',
  templateUrl: 'tierDisplay.html'
})
export class TierPage {
  id:any;
  constructor(public params: NavParams) {
      this.params = params;
      this.id = params.data.costId;
  }
}
