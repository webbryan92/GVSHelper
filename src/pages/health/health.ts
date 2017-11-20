import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'healthDisplay',
    templateUrl: 'health.html',
  })
  export class HPPage {
    id: any;
    constructor(
      public navCtrl: NavController, 
      public params: NavParams
    ) {
        this.params = params;
        this.id = params.get('id');
    }
  }