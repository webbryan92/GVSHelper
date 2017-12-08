import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TierService{
    constructor ( public afdb: AngularFireDatabase) {}
    getTier(tier): Observable<any> {
        console.log(tier, typeof tier);
        return this.afdb.list('/Suits', ref => ref.orderByChild('cost').equalTo(Number(tier))).valueChanges();
        //return this.afdb.list('/Suits').valueChanges();
    }
}
