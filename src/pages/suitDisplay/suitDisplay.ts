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
  public suitRef: any;
  public suit: any;
  public pilots: any;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private suitService: SuitService
  ) {
    this.suitRef = params.get('suit');
    this.suit = this.suitService.getSuit(this.suitRef.key);
  }

  ngOnInit(): void {
    this.pilots = this.suitService.getPilots(this.suitRef.key);
  }
}
