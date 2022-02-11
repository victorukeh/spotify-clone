const asyncHandler = require('../middlewares/asyncHandler')
const SpotifyWebApi = require('spotify-web-api-node')

// @desc    Login and Authentication of User
// @route   POST /login
// @access  Public
exports.login = async(req, res) => {
  const { code } = req.body
  console.log(code)
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })
  try {
    const {
      body: { access_token, refresh_token, expires_in },
    } = await spotifyApi.authorizationCodeGrant(code)
    res.json({ access_token, refresh_token, expires_in })
  } catch (err) {
    console.log('login error')
    console.log(err)
    res.sendStatus(400)
  }
}

// @desc    Refresh after token to avoid token expiry
// @route   POST /refresh
// @access Public
exports.refresh = async (req, res, next) => {
  const { refreshToken } = req.body
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })
  try {
    const {
      body: { access_token, expires_in },
    } = await spotifyApi.refreshAccessToken()
    res.json({ access_token, expires_in })
  } catch (err) {
    console.log(err.body)
    res.sendStatus(400)
  }
}
