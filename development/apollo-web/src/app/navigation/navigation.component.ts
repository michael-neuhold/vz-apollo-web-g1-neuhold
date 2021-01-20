import { Component, Input } from '@angular/core';
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

  constructor(private auth: AuthenticationService) { }

  @Input() username: string;

  login() {
    this.auth.login();
  }

  logout() {
    if(this.auth.isLoggedIn()) {
      this.auth.logout();
    }
  }

}
