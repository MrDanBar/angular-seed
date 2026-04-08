import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character-interface';
import { v7 as uuidv7 } from 'uuid';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAdd {

  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || this.name().trim() === '' || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: uuidv7(),
      name: this.name(),
      power: this.power(),
    }

    this.newCharacter.emit(newCharacter);

    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }
}
