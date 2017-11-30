import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TermsService{
    constructor ( public afdb: AngularFireDatabase) {}    
    getTerms(): Observable<any> {
        return this.afdb.list(`/Terminology`).snapshotChanges();
    }
}