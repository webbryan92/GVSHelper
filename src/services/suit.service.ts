import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SuitService{
    constructor ( public afdb: AngularFireDatabase) {} 

    public getPilots(cost,suitId): Observable<any> {               
        return this.afdb.list(`/Suits/${cost}/${suitId}/pilots`).valueChanges(); //unpack the pilots
    }
    /*public getSuit(cost,suitId): Observable<any> {
        return this.afdb.object(`/Suits/${cost}/${suitId}`).valueChanges();
    }*/
    public getRanged(cost, suitId): Observable<any> {               
        return this.afdb.list(`/Suits/${cost}/${suitId}/shooting`).valueChanges(); //unpack the ranged
    }
    public getMelee(cost, suitId): Observable<any> {
        return this.afdb.list(`/Suits/${cost}/${suitId}/fighting`).valueChanges();
    }
    public getSpecials(cost, suitId): Observable<any> {
        return this.afdb.list(`/Suits/${cost}/${suitId}/special`).valueChanges();
    }
    /*getSuit(suitId) {
        return Observable.combineLatest(
          this.afdb.object(`/suits/${suitId}/`).valueChanges(),
          this.afdb.list(`/suits/${suitId}/pilots`).valueChanges(),
        ).map(([suit, pilots]) => { suit, pilots });
}*/
}