import { NavComponent } from '../nav/nav.component';
import { AuthGuard } from '../core/guards/auth.guard';
// import { Error404Component } from './pages/error404/error404.component';
// import { Error500Component } from './pages/error500/error500.component';
// import { LockComponent } from './pages/lock/lock.component';
import { LoginComponent } from './pages/login/login.component';
// import { CheckKeyComponent } from './pages/check-key/check-key.component';
// import { RegisterComponent } from './pages/register/register.component';

export const routes = [

  {
    path: '',
    component: NavComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: 'bookings',
        loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsModule),
      }
    ]
  },

  // Not lazy-loaded routes
  {
    path: 'login',
    component: LoginComponent
  },
  // Not found
  { path: '**', redirectTo: 'notfound' }

];
