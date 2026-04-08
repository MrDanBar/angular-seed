import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Hero } from './pages/hero/hero';
import { Dragonball } from './pages/dragonball/dragonball';
import { DragonballSuper } from './pages/dragonball-super/dragonballsuper';

export const routes: Routes = [
  {
    path: '',
    component: Counter
  },
  {
    path: 'hero',
    component: Hero
  },
  {
    path: 'dragonball',
    component: Dragonball
  },
  {
    path: 'dragonballsuper',
    component: DragonballSuper
  },
  {
    path: '**',
    redirectTo: ''
  }
];
