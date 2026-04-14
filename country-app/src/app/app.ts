import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneralFooter } from "./shared/components/GeneralFooter/GeneralFooter";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GeneralFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('country-app');
}
