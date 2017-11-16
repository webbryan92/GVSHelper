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
    public melees: any;
    public previous: any;
    public previousVal: any;
    public specials: any;
    public expanded: boolean;

  constructor(
    public navCtrl: NavController, 
    public params: NavParams, 
    private suitService: SuitService
  ) {
      this.suitRef = params.get('suit');        
      this.suit = this.suitRef.payload.val(); 
      this.expanded = false;
  }

  ngOnInit(): void {
    this.pilots = this.suitService.getPilots(this.suitRef.key);
    this.shooting = this.suitService.getRanged(this.suitRef.key);
    this.melees = this.suitService.getMelee(this.suitRef.key);
    this.specials = this.suitService.getSpecials(this.suitRef.key);
  }
  goBack() {
    this.navCtrl.pop()
  }
  
  previousType(type): boolean{
    if(type === this.previous){
      this.previousVal = true;
      return true      
    }
    this.previous = type;
    this.previousVal = false;
    return false
  }
}
