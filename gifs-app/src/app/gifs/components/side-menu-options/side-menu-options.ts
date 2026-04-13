import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifService } from '../../services/GifService';

interface MenuOption {
  label: string;
  icon: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'gift-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptions {

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gift TOP',
      route: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      subLabel: 'By name',
      route: '/dashboard/search'
    }
  ]

  gifService = inject(GifService);
}
