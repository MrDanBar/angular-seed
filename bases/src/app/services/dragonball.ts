import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character-interface';

@Injectable({
  providedIn: 'root'
})
export class Dragonball {

  characters = signal<Character[]>(this.loadFromLocalStorage());

  loadFromLocalStorage(): Character[] {
    const values = localStorage.getItem('dragonball-characters');

    return values? JSON.parse(values) : [];
  }

  saveToLocalStorage = effect(() => {
    localStorage.setItem('dragonball-characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    this.characters.update(list => [...list, character]);
  }
}
