import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter.html',
  styles: `
    button {
      background-color: #CC0000AA;
      padding: 25px;
    }
  `
})
export class Counter {
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number): void {
    this.counter += value;
    this.counterSignal.update(signalValue => signalValue + value)
  }

  resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
