import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import { authConfig } from '../auth.config';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private auth: AuthenticationService, private authentication: OAuthService,private router: Router) {
    authentication.events.subscribe((event) => {
      console.log(this.name = this.auth.givenName());
    })
  }

  name: string;

  login() {
    this.auth.login();
    this.name = this.auth.givenName();
  }

  logout() {
    if(this.auth.isLoggedIn()) {
      this.auth.logout();
    }
  }

}
