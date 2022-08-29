/* Don't put secret configuration settings in this file, this is rendered
by the client. */

const config = {
  auth: {
    clientId: '7eaa8cab-9d2e-45fc-af83-5d1a717c6a51',
    authority: 'https://login.microsoftonline.com/organizations/',
    redirectUri: 'https://localhost',
    postLogoutRedirectUri: 'https://localhost/signedout'
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false
  },
  api: {
    scopes: ['https://whiteknightit.com.au/8bb1e7b7-02ee-4132-b982-a7788b177ea5/ffpp-api.access'],
    swagger: true,
    deviceTag: '4180bc'
  },
  ui: {
    frontEndUrl: 'https://localhost',
    swaggerUi: true
  }
};