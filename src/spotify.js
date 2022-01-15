
export const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectUri = 'http://localhost:3000/'

const clientId = '13f6b6132cde494f9d7c84b475b1f049'

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-library-read',
  'user-library-modify',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&show_dialog=true`

