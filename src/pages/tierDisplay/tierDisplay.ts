import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

import { TierService } from '../../services/tier.service';

import { SuitPage } from '../suitDisplay/suitDisplay';
import { HPPage } from '../health/health';


@Component({
  selector: 'tierDisplay',
  templateUrl: './tierDisplay.html',
  providers: [TierService]
})
export class TierPage implements OnInit {
  id: any;
  suits: Observable<any>;
  suitNames: string[];
  constructor(public navCtrl: NavController, public params: NavParams, private tierService: TierService) {
      this.params = params;
      this.id = params.data.costId;
  }
  getSuits(): void {
    this.suits = this.tierService.getTier(this.id);
  }
  ngOnInit(): void {
    this.getSuits();
  }
  filter(suit) : boolean{
    if (suit.payload.val().cost === Number(this.id)){
      return true;
    }
    return false;
  }
  viewSuit(suit){
    this.navCtrl.push(SuitPage, {
      suit:suit
    });
  }
  viewHP(){
    this.navCtrl.push(HPPage, {cost:this.id});
  }
}
