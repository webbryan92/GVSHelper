import { Injectable } from '@angular/core';
import { Suit } from './suit';
import { SUITS } from './mock-suitList'

@Injectable()
export class TierService{
    getSuits(): Promise<Suit[]> {
        return Promise.resolve(SUITS);
    }
}