import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuitPage } from '../../pages/suitDisplay/suitDisplay';

@Component({
    selector: 'gh-suit-grid-item',
    templateUrl: 'suit-grid-item.component.html'
})
export class SuitGridItemComponent implements OnInit {
  @Input('suit') suit: any;
  public suitSrc: string;

  constructor(
    public navCtrl: NavController ) { }

  ngOnInit() {
    this.suitSrc = `${this.suit.payload.val().imgsrc}?${Date.now()}`
  }
  public viewSuit(suit){
    this.navCtrl.push(SuitPage, {
      suit:suit
    });
  }
}