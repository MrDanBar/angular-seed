import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-by-capital',
  imports: [],
  templateUrl: './byCapital.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapital {


  onSearch(text: string) {
    console.info('Search: ', text);
  }
 }
