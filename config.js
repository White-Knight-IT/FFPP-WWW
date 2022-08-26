/* Don't put secret configuration settings in this file, this is rendered
by the client. */

const config = {
  auth: {
    clientId: '938b39c2-c4fd-45ea-bc7e-9bf644ed0017',
    authority: 'https://login.microsoftonline.com/organizations/',
    redirectUri: '/index.html',
    postLogoutRedirectUri: '/bye.html'
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false
  },
  api: {
    scopes: ['https://whiteknightit.com.au/f005a7ba-9ead-464e-a78d-53d233a54c51/ffpp-api.access'],
    requiresInit: true
  }
};