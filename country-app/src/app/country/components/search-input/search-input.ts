import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInput {

  placeHolder = input.required<string>();
  value = output<string>();

  onSearch(text: string): void {
    if (!text) {
      return;
    }

    this.value.emit(text);
  }
}
