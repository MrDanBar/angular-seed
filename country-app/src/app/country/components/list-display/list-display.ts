import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'country-list-display',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './list-display.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDisplay {
  list = input.required<Country[] | undefined | null>();

  isLoading = input<boolean>();
  isEmpty = computed(() => this.list()?.length === 0)
}
