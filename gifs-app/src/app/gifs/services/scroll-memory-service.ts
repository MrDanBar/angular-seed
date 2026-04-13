import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollMemoryService {
  trendingScrollState = signal(0);
}
