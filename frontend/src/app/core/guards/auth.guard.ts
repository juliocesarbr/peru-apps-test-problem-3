import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const isLoggedInUser = this.authenticationService.isLoggedIn();

    if (isLoggedInUser) {
      // console.log('AUTH GUARD PASSED: USER IS LOGGED IN');
      // console.log(isLoggedInUser);
      return true;
    }

    // console.log('NOT AUTH GUARD PASSED: USER IS NOT LOGGED IN');

    // const currentUser = this.authenticationService.currentUser();
    // console.log('AUTH GUARD');
    // console.log(currentUser);
    // if (currentUser) {
    //     // logged in so return true
    //     return true;
    // }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);

    return false;
  }
}
