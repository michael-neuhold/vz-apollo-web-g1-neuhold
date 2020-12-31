import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
 providedIn: 'root'
})

export class AuthenticationService {
  
    constructor(private oauthService: OAuthService) { }

    login(): boolean {
      this.oauthService.initImplicitFlow();
      return true;
    }

    isLoggedIn() {
      return this.oauthService.hasValidAccessToken() && this.oauthService.hasValidIdToken();
    }

    givenName() {
      const claims = this.oauthService.getIdentityClaims();
      if (!claims) {
        return null;
      }
      return claims['name'];
    }

}