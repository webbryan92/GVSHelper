import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { TermsService } from '../../services/terms.service';

@Component({
    selector: 'termsDisplay',
    templateUrl: 'termsDisplay.html',
    providers: [TermsService]
  })
  export class TermsDisplayPage {
    terms: any;
    category: any;
    constructor(
      public navCtrl: NavController,
      public params: NavParams,
      public termsService: TermsService
    ) {
      this.category = params.get('category')
    }
    ngOnInit(): void {
      this.terms = this.termsService.getTerms();
    }
    filter(term) : boolean{
      if (term.payload.val().category === this.category){
        return true;
      }
      return false;
    }
  }