import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TermsService } from '../../services/terms.service';

@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
  providers: [TermsService]
})
export class TermsPage {
  terms: any;
  constructor(public navCtrl: NavController, public termsService: TermsService) {

  }
  ngOnInit(): void {      
    this.terms = this.termsService.getTerms();
  }
}
