import { Injectable } from '@angular/core';
import { Suit } from './suit';
import { SUITS } from './mock-suitList'

@Injectable()
export class TierService{
    costSUITS: any;
    getSuits(filterCost: number): Promise<Suit[]> {               
        this.costSUITS = SUITS.filter(function(co){
            return co.cost == filterCost;
        });
        return Promise.resolve(this.costSUITS);
    }
}