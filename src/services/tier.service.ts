import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TierService{
    constructor ( public afdb: AngularFireDatabase) {}    
    getTier(): Observable<any> {
        return this.afdb.list('/Suits').snapshotChanges();
    }
}