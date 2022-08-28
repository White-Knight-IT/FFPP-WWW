/* Don't put secret configuration settings in this file, this is rendered
by the client. */

const config = {
  auth: {
    clientId: '5d8bd526-99a5-4a18-980b-fbed22bb1cf9',
    authority: 'https://login.microsoftonline.com/organizations/',
    redirectUri: '/index.html',
    postLogoutRedirectUri: '/bye.html'
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false
  },
  api: {
    scopes: ['https://whiteknightit.com.au/21946932-7e8f-41f3-8666-e8cf5bf1e7c7/ffpp-api.access'],
    requiresInit: true
  }
};