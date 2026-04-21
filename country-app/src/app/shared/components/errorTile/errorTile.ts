import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-error-tile',
  imports: [],
  templateUrl: './errorTile.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorTile {
  tile = input.required<string|null|undefined>()
}
