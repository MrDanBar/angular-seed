import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character-interface';

@Injectable({
  providedIn: 'root'
})
export class Dragonball {

  private defaultCharacters: Character[] = [
    { id: '1', name: 'Goku', power: 15000 },
  ]

  public characters = signal<Character[]>(this.defaultCharacters);

  public addCharacter(character: Character) {
    this.characters.update(list => [...list, character]);
  }
}
