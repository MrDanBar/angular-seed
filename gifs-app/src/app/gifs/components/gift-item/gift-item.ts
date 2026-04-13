import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gif-interface';

@Component({
  selector: 'gift-item',
  imports: [],
  templateUrl: './gift-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftItem {

  itemDetails = input.required<Gif>();
}
