import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gif-interface';
import { GiftItem } from '../gift-item/gift-item';

@Component({
  selector: 'gift-item-list',
  imports: [GiftItem],
  templateUrl: './gift-item-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftItemList {
  list = input.required<Gif[][]>();
}
