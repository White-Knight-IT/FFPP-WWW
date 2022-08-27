/* Don't put secret configuration settings in this file, this is rendered
by the client. */

const config = {
  auth: {
    clientId: '1baa0763-7183-4c54-b0fb-8946fd18db78',
    authority: 'https://login.microsoftonline.com/organizations/',
    redirectUri: '/index.html',
    postLogoutRedirectUri: '/bye.html'
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false
  },
  api: {
    scopes: ['https://whiteknightit.com.au/051e4c82-744e-43fe-879e-aa93535959d9/ffpp-api.access'],
    requiresInit: true
  }
};