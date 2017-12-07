import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'gh-suit-grid-item',
    templateUrl: 'suit-grid-item.component.html'
})
export class SuitGridItemComponent implements OnInit {
  @Input('suit') suit: any;
  public suitSrc: string;

  constructor() { }

  ngOnInit() {
    this.suitSrc = `${this.suit.imgsrc}?${Date.now()}`
  }

  public filter() {
    return true;
  }
}
