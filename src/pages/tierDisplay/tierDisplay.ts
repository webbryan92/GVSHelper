import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Suit } from '../../app/services/suit';
import { SUITS } from '../../app/services/mock-suitList';
import { TierService } from '../../app/services/tier.service'

@Component({
  selector: 'tierDisplay',
  templateUrl: 'tierDisplay.html',
  providers: [TierService]
})
export class TierPage implements OnInit {
  id:any;
  suits: Suit[];
  constructor(public params: NavParams, private tierService: TierService) {
      this.params = params;
      this.id = params.data.costId;
  }
  getSuits(): void {
    this.tierService.getSuits().then(suits => this.suits = suits);
  }
  ngOnInit(): void {
    this.getSuits();
  }
}
