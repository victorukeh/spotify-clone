export const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectUri = 'http://localhost:3000/'

const clientId = '13f6b6132cde494f9d7c84b475b1f049'
// '13f6b6132cde494f9d7c84b475b1f049'
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-library-read',
  'user-library-modify',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'streaming',
  'user-read-email ',
  'user-read-private',
]

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
      }
      return initial
    }, {})
  // .substring(1)
  // .split("&")
  // .reduce((initial, item) => {
  //   var parts = item.split("=");
  //   initial[parts[0]] = decodeURIComponent(parts[1]);

  //   return initial;
  // }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`

// `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
//   '%20'
// )}&show_dialog=true`
