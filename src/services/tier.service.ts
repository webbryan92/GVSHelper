import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TierService{
    constructor ( public afdb: AngularFireDatabase) {}    
    getTier(tier): Observable<any> {
        return this.afdb.list(`/Suits/${tier}`, ref => ref.orderByChild('name')).snapshotChanges();
    }
}