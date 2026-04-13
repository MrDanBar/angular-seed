import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifService } from '../../services/GifService';
import { ScrollMemoryService } from '../../services/scroll-memory-service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Trending implements AfterViewInit {

  gifService = inject(GifService);
  scrollMemoryService = inject(ScrollMemoryService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('divTrending');

  ngAfterViewInit() {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if (!scrollDiv) {
      return;
    }

    scrollDiv.scrollTop = this.scrollMemoryService.trendingScrollState();
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if (!scrollDiv) {
      return;
    }

    const { scrollTop, clientHeight, scrollHeight } = scrollDiv;

    this.scrollMemoryService.trendingScrollState.set(scrollTop);

    // +250 It is a delta margin for calculation
    const isNewPageRequired = scrollTop + clientHeight + 250 >= scrollHeight;

    if (isNewPageRequired) {
      this.gifService.trendingPage.update(page => page + 1);
      this.gifService.loadTrendingGifs();
    }
  }
}
