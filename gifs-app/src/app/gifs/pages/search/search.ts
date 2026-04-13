import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GiftItemList } from '../../components/gift-item-list/gift-item-list';
import { GifService } from '../../services/GifService';
import { Gif } from '../../interfaces/gif-interface';

@Component({
  selector: 'app-search',
  imports: [GiftItemList],
  templateUrl: './search.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Search {

  gifService = inject(GifService);

  gifs = signal<Gif[][]>([]);

  onSearch(query: string) {
    this.gifService
    .searchGifs(query)
    .subscribe(result => this.gifs.set(result));
  }
}
