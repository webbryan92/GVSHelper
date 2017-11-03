import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { TierService } from '../../services/tier.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'tierDisplay',
  templateUrl: 'tierDisplay.html',
  providers: [TierService]
})
export class TierPage implements OnInit {
  id: any;  
  suits: Observable<any>;
  suitNames: string[];
  constructor(public params: NavParams, private tierService: TierService) {
      this.params = params;
      this.id = params.data.costId;
  }
  getSuits(): void {
    this.suits = this.tierService.getTier();
  }
  ngOnInit(): void {
    this.getSuits();
  }
  filter(suit) : boolean{
    if (suit.payload.val().cost != this.id){
      return true;
    }
    return false;
  }
}
