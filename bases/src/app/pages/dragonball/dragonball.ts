import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball {

  private defaultCharacters: Character[] = [
    { id: 1, name: 'Goku', power: 15000 },
    { id: 11, name: 'Trunks', power: 99000 },
    { id: 111, name: 'Boo', power: 14999 },
    { id: 1111, name: 'Pan', power: 99999 },
    { id: 11111, name: 'Yancha', power: 1000 },
  ]

  characters = signal<Character[]>(this.defaultCharacters);

  name = signal('');
  power = signal(0);

  addCharacter() {
    if (!this.name() || this.name().trim() === '' || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: new Date().getMilliseconds(),
      name: this.name(),
      power: this.power(),
    }

    this.characters.update(list => [...list, newCharacter]);
    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }
}

interface Character {
  id: number;
  name: string;
  power: number;
}
