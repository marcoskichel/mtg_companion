import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Deck} from './deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  private _decks: BehaviorSubject<Deck[]> = new BehaviorSubject<Deck[]>([]);

  constructor() {
  }

}
