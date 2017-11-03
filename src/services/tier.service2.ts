import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TierService2{
    costSUITS: any;
    constructor ( public afdb: AngularFireDatabase) {}
    getSuits(): Observable<any> {               
        return this.afdb.list('/suits').snapshotChanges();
    }
    getTier(filterCost): Observable<any> {
        this.costSUITS = this.getSuits().filter(function(co){
            return co.cost == filterCost;
        });
        return this.costSUITS;
    }
}
