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
    public shooting: any;

  constructor(
    public navCtrl: NavController, 
    public params:NavParams, 
    private suitService: SuitService
  ) {
      this.suitRef = params.get('suit');        
      this.suit = this.suitRef.payload.val();    
  }
  ngOnInit(): void {
    this.pilots = this.suitService.getPilots(this.suitRef.key);
    this.shooting = this.suitService.getRanged(this.suitRef.key);
  }
}
