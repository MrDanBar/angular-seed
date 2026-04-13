import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/GifService';
import { GiftItemList } from "../../components/gift-item-list/gift-item-list";

@Component({
  selector: 'app-history',
  imports: [GiftItemList],
  templateUrl: './history.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class History {

  gifService = inject(GifService);

  key = toSignal(inject(ActivatedRoute).params.pipe(
    map(params => params['search-key'])
  ))

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.key());
  })

}
