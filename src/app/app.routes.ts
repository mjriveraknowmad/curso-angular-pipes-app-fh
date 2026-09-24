import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes Básicos',
    loadComponent: () => import('./pages/basic-page/basic-page.component'),
  },
  {
    path: 'numbers',
    title: 'Numbers Pipe',
    loadComponent: () => import('./pages/numbers-page/numbers-page.component'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
