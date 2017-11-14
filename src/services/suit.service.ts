import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SuitService{
    constructor ( public afdb: AngularFireDatabase) {} 

    public getPilots(suitId): Observable<any> {               
        return this.afdb.list(`/Suits/${suitId}/pilots`).valueChanges(); //unpack the pilots
    }
    public getSuit(suitId): Observable<any> {
        return this.afdb.object(`/Suits/${suitId}`).valueChanges();
    }
    public getRanged(suitId): Observable<any> {               
        return this.afdb.list(`/Suits/${suitId}/shooting`).valueChanges(); //unpack the ranged
    }
    /*getSuit(suitId) {
        return Observable.combineLatest(
          this.afdb.object(`/suits/${suitId}/`).valueChanges(),
          this.afdb.list(`/suits/${suitId}/pilots`).valueChanges(),
        ).map(([suit, pilots]) => { suit, pilots });
}*/
}