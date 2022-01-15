const fs = require('fs')
const asyncHandler = require('../middlewares/asyncHandler')
const spotifyWebApi = require('spotify-web-api-node')
const spotifyApi = new spotifyWebApi()

// @desc    Get user's playlists from Spotify
// @route   GET /playlists
// @access  Public
exports.getPlaylists = asyncHandler(async (req, res, next) => {
  const data = await spotifyApi.getUserPlaylists()
  const playlists = []

  console.log(data)

  for (let playlist of data.body.items) {
    let tracks = await getUserPlaylists(playlist.id)
    return tracks
  }
})

// @desc Local Function to get playlists for User

function getPlaylistTracks(playlistId) {
  const data = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 1,
    limit: 15,
    fields: 'items',
  })

  let tracks = []

  for (let track_obj of data.body.items) {
    const track = track_obj.track
    tracks.push(track)
  }

  return tracks
}

// @desc    Get songs from Playlists
// @route   GET /playlists/{playlist}/
// @access  Public
exports.getASong = () =>
  asyncHandler(async (req, res, next) => {
    const song = await getUserSongs(song.id)
  })

function getSong(songId) {
  const data = await spotifyApi
    .getTrack(trackId)
    .then(console.log(data.body))
    .catch((err) => {
      console.log(err)
    })
}

// getAudioFeaturesForTrackjkl
function playTrack(Id) {
  const track = await getSong(songId)
    .getAudioFeaturesForTrack(songId)
    .then(console.log(track.body))
    .catch((err) => {
      console.log(err)
    })
}

exports.getCurrentTrack = asyncHandler(async (req, res, next) => {
  const track = await spotifyApi
    .getMyCurrentPlayingTrack({ offset: 1, limit: 1 })
    .then(console.log(track.body))
    .catch((err) => {
      console.log(err)
    })
})

exports.pauseTrack = asyncHandler(async (req, res, next) => {
  const track = await spotifyApi.getMyCurrentPlayingTrack({
    offset: 1,
    limit: 1,
  })
  await track
    .pause()
    .then(console.log(track.body))
    .catch((err) => {
      console.log(err)
    })
})


// skipToPrevious
// skipToNext
// seek
// setRepeat
// setShuffle
// setVolume
// getMyRecentlyPlayedTracks
// addToQueue
// getMyTopTracks
//   getAudioFeaturesForTracks
