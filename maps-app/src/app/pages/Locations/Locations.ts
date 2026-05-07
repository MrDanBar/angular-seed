import { DatePipe } from '@angular/common';
import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-locations',
  imports: [DatePipe],
  templateUrl: './Locations.html',
})
export class Locations {

  #target = new Date('2026/05/30')

  time = signal(new Date());

  get target() {
    return this.#target;
  }

  timer = setInterval(() => {
    if (!this.time()) {
      return;
    }

    const today = new Date();
    this.time.set(new Date(this.#target.getTime() - today.getTime()));
  }, 1000);

  days = computed(() => this.time().getDate());
  hours = computed(() => this.time().getHours());
  minutes = computed(() => this.time().getMinutes());
  seconds = computed(() => this.time().getSeconds());

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
