import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SuitService{
    constructor ( public afdb: AngularFireDatabase) {}
    getPilots(suitId): Observable<any> {
        return this.afdb.list(`/Suits/${suitId}/pilots`).valueChanges();
    }

    public getSuit(suitId): Observable<any> {
      return this.afdb.object(`/Suits/${suitId}`).valueChanges();
    }
}
