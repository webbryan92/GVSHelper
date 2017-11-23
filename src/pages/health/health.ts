import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { CompService } from '../../services/comp.service';

@Component({
    selector: 'healthDisplay',
    templateUrl: 'health.html',
    providers: [CompService]
  })
  export class HPPage {
    cost: any;
    comps:any;
    constructor(
      public navCtrl: NavController, 
      public params: NavParams,
      public compService: CompService
    ) {
        this.params = params;
        this.cost = params.get('cost');
    }
    ngOnInit(): void {      
      this.comps = this.compService.getComps(this.cost);
    }
  }