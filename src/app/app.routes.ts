import { Routes, RouterModule } from '@angular/router';
import { Home } from './features/home';
import { About } from './features/about';
import { NoContent } from './features/no-content';
import { Login } from './features/auth';

import { DataResolver } from './app.resolver';
import { LoggedInGuard } from "./core/auth/is-authenticated.guard";


export const ROUTES: Routes = [
  { path: '',      component: Home, canActivate: [LoggedInGuard] },
  { path: 'home',  component: Home, canActivate: [LoggedInGuard] },
  { path: 'about', component: About, canActivate: [LoggedInGuard] },
  {
    path: 'detail', canActivate: [LoggedInGuard], loadChildren: () => System.import('./features/detail')
  },
  { path: 'login',      component: Login },
  { path: '**',    component: NoContent },
];
