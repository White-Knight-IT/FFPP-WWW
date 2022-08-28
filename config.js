/* Don't put secret configuration settings in this file, this is rendered
by the client. */

const config = {
  auth: {
    clientId: 'cdcc9bc1-f1fe-4ca1-a47a-d8195ce85807',
    authority: 'https://login.microsoftonline.com/organizations/',
    redirectUri: 'https://localhost',
    postLogoutRedirectUri: 'https://localhost/signedout'
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false
  },
  api: {
    scopes: ['https://whiteknightit.com.au/ed0c3103-6618-4ac0-ac28-e6d1fa3a9cbe/ffpp-api.access'],
    swagger: true,
    deviceTag: '4180bc'
  },
  ui: {
    frontEndUrl: 'https://localhost',
    swaggerUi: true
  }
};