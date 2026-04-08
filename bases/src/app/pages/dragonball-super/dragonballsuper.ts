import { Component, inject, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { Dragonball } from "../../services/dragonball";

@Component({
  selector: 'app-dragonballsuper',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonballsuper.html',
})
export class DragonballSuper {

  public dragonBallService = inject(Dragonball);
}
