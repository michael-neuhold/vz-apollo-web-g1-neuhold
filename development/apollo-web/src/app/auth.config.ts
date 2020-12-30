import { AuthConfig } from 'angular-oauth2-oidc';
// INTROSPECTION
// with Keycloak 11.0.2
// siehe https://www.keycloak.org/docs/latest/securing_apps/index.html#endpoints-2
/*
export const authConfig: AuthConfig = {
 issuer: 'http://localhost:8080/auth/realms/apollo',
 loginUrl: 'http://localhost:8080/auth/realms/apollo/protocol/openid-connect/auth',
 logoutUrl: 'http://localhost:8080/realms/apollo/protocol/openid-connect/logout',
 tokenEndpoint: 'http://localhost:8080/auth/realms/apollo/protocol/openid-connect/token',
 sessionCheckIFrameUrl: 'http://localhost:8080/auth/realms/apollo/protocol/openid-connect/login-status-iframe.html',
 userinfoEndpoint: 'http://localhost:8080/auth/realms/apollo/protocol/openid-connect/userinfo',
 clientId: 'apollo-web',
 responseType: 'code',
 redirectUri: window.location.origin + '/index.html',
 silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
 scope: 'openid profile email',
 silentRefreshTimeout: 5000, // For faster testing
 timeoutFactor: 0.25, // For faster testing
 sessionChecksEnabled: true,
 showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
 clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
};
*/


export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://idsvr4.azurewebsites.net',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'spa',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid profile email offline_access api',

  showDebugInformation: true,
};
