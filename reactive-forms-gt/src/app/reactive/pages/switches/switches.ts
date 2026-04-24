import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  imports: [JsonPipe],
  templateUrl: './switches.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Switches { }
