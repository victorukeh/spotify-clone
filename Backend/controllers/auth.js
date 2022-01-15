const asyncHandler = require('../middlewares/asyncHandler')
const SpotifyWebApi = require('spotify-web-api-node')

// @desc    Login and Authentication of User
// @route   POST /login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })
  spotifyApi.authorizationCodeGrant(code).then((data) => {
    res
      .json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
  }).catch(() => {
    res.sendStatus(400)
  })
  // const { code } = req.body
  // const spotifyApi = new SpotifyWebApi({
  //   redirectUri: process.env.REDIRECT_URI,
  //   clientId: process.env.CLIENT_ID,
  //   clientSecret: process.env.CLIENT_SECRET,
  // })
  // try {
  //   const {
  //     body: { access_token, refresh_token, expires_in },
  //   } = await spotifyApi.authorizationCodeGrant(code)
  //   res.json({ access_token, refresh_token, expires_in })
  // } catch (err) {
  //   console.log('login error')
  //   console.log(err)
  //   res.sendStatus(400)
  // }
})

// @desc    Refresh after token to avoid token expiry
// @route   POST /refresh
// @access Public
exports.refresh = asyncHandler(async (req, res, next) => {
  const { refreshToken } = req.body
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })
  console.log('hi1')
  try {
    console.log('hi2 ')
    const {
      body: { access_token, expires_in },
    } = await spotifyApi.refreshAccessToken()
    res.json({ access_token, expires_in })
  } catch (err) {
    console.log(err.body)
    res.sendStatus(400)
  }
})

// exports.callback = asyncHandler(async (req, res, next) => {
//   const { code } = req.query
//   try {
//     let data = await spotifyApi.authorizationCodeGrant(code)
//     const { access_token, refresh_token } = data.body
//     spotifyApi.setAccessToken(access_token)
//     spotifyApi.setRefreshToken(refresh_token)
//     res.redirect('http://localhost:3000')
//   } catch (err) {
//     res.redirect('/login')
//   }
// })

// // @desc    User Information for Profile
// // @route   GET /profile/userinfo
// // @access  Private
// exports.userinfo = asyncHandler(async(req, res, next) => {
//   try {
//     var result = await spotifyApi.getMe();
//     console.log(result.body);
//     res.status(200).send(result.body)
//   } catch (err) {
//     res.status(400).send(err)
//   }
// })

// // @desc    User Information for Profile
// // @route   GET /profile/userinfo
// // @access  Private
// exports.playlists = asyncHandler(async(req, res, next) => {
//   try {
//     var result = await spotifyApi.getUserPlaylists();
//     res.status(200).send(result.body);
//   } catch (err) {
//     res.status(400).send(err)
//   }
// })
