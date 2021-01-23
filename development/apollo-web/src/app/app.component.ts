import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { filter } from 'rxjs/operators';
import { authConfig } from './auth.config';
import { AuthenticationService } from './authentication.service';
import { ScheduleService } from './services/schedule/schedule.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private oauthService: OAuthService,
    private auth: AuthenticationService) {
    this.configureWithNewConfigApi();
  }

  username: string;

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.events.subscribe((event) => {
      this.username = this.auth.givenName();
    });
    /*
    this.oauthService.events.pipe(filter(e => e.type === 'session_terminated')).subscribe(e => {
      console.debug('session terminated!');
      this.auth.logout();
    });
    */
  }

}
