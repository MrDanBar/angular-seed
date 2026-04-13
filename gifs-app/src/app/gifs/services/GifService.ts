import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import type { Gif } from '../interfaces/gif-interface';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private static PAGE_SIZE = 50;

  trendingGifs = signal<Gif[]>([]);
  isTrendingGifsLoading = signal(false);
  trendingPage = signal(0);

  searchHistory = signal<Record<string, Gif[]>>(this.loadGifHistory());
  searchHistoryKeys = computed(() => {
    return Object.keys(this.searchHistory())
  })


  private http = inject(HttpClient);

  constructor() {
    this.loadTrendingGifs();
  }

  trendingGroup = computed(() => {
    return this.splitGifData(this.trendingGifs());
  });

  saveToLocalStorage = effect(() => {
    const gifsHistory = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs-history', gifsHistory);
  });

  loadTrendingGifs() {
    if (this.isTrendingGifsLoading()) {
      return;
    }

    this.isTrendingGifsLoading.set(true);

    this.http.get<GiphyResponse>(`${environment.giphy.baseUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphy.apiKey,
        limit: GifService.PAGE_SIZE,
        offset: this.trendingPage() * GifService.PAGE_SIZE
      }
    })
      .subscribe((response) => {
        const trendingGifs = GifMapper.mapGiphyItemsToGifs(response.data);

        this.trendingGifs.update(currentGifs => [...currentGifs, ...trendingGifs]);

        if (this.trendingGifs().length < response.pagination.total_count) {
          this.isTrendingGifsLoading.set(false);
        } else {
          console.info("No more gifs for today ;)");
        }
      })
  }

  searchGifs(text: string) {
    return this.http.get<GiphyResponse>(`${environment.giphy.baseUrl}/gifs/search`, {
      params: {
        api_key: environment.giphy.apiKey,
        q: text
      }
    })
      .pipe(
        map(response => response.data),
        map(items => GifMapper.mapGiphyItemsToGifs(items)),
        tap(items => {
          this.searchHistory.update(history => ({
            [text.toLowerCase()]: items,
            ...history,
          }))
        }),
        map(data => this.splitGifData(data))
      );
  }

  getHistoryGifs(key: string): Gif[][] {
    const data = this.searchHistory()[key] ?? [];
    return this.splitGifData(data);
  }

  loadGifHistory() {
    const gifsHistory = localStorage.getItem('gifs-history') ?? '{}';

    return JSON.parse(gifsHistory);
  }

  private splitGifData(list: Gif[]): Gif[][] {
    const group = [];

    for (let index = 0; index < list.length; index = index + 3) {
      group.push(list.slice(index, index + 3));
    }

    return group;
  }
}
