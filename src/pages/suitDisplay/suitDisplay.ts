import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { TierService } from '../../services/tier.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'suitDisplay',
  templateUrl: 'suitDisplay.html',
  providers: [TierService]
})
export class SuitPage {
    suit: any;
  constructor(public navCtrl: NavController, public params:NavParams) {
      this.suit = params.get('suit');
  }
}
