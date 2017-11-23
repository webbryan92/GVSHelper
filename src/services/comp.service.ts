import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CompService{
    constructor ( public afdb: AngularFireDatabase) {}    
    getComps(cost): Observable<any> {
        return this.afdb.list(`/CostComps/${cost}/comps`).snapshotChanges();
    }
}