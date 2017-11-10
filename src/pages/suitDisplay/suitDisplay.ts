import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { SuitService } from '../../services/suit.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'suitDisplay',
  templateUrl: 'suitDisplay.html',
  providers: [SuitService]
})
export class SuitPage {
    object: any;
    suit: any;
    pilots: any;
  constructor(public navCtrl: NavController, public params:NavParams, private suitService: SuitService) {
      this.suit = params.get('suit');      
  }
  ngOnInit(): void {
    this.pilots = this.suitService.getPilots(this.suit.key);
  }
}
