import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuOptions } from '../side-menu-options/side-menu-options';
import { SideMenuHeader } from '../side-menu-header/side-menu-header';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'gift-side-menu',
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: './side-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenu {

  envs = environment;
}
