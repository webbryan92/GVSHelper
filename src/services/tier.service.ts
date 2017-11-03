import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TierService{
    constructor ( public afdb: AngularFireDatabase) {}    
    getSuits(): Observable<any> {               
        return this.afdb.list('/Suits').snapshotChanges();
    }
    getTier(): Observable<any> {
        return this.afdb.list('/Suits', ref => ref.orderByChild('name')).snapshotChanges();
    }
}