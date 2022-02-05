import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Player from './Player'
import { useDataLayerValue } from './DataLayer'
import { getTokenFromResponse } from './spotify'

import axios from 'axios'
import './App.css'

const spotifyApi = new SpotifyWebApi()

function App() {
  const [{ token, refresh }, dispatch] = useDataLayerValue()
  // const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState('')

  function chooseTrack(track) {
    dispatch({
      type: 'SET_PLAYINGTRACK',
      playingTrack: track
    })
    dispatch({
      type: 'SET_SEARCH',
      search: ''
    })
    // setLyrics("")
  }

  // useEffect(() => {
  //   if (!playingTrack) return

  //   axios
  //     .get('http://localhost:8000/lyrics', {
  //       params: {
  //         track: playingTrack.title,
  //         artist: playingTrack.artist,
  //       },
  //     })
  //     .then((res) => {
  //       setLyrics(res.data.lyrics)
  //     })
  // }, [playingTrack])

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse()
    let _token = hash.access_token
    let _refresh = hash.refresh_token
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      if (_refresh) {
        dispatch({
          type: 'SET_REFRESH',
          refresh: _refresh,
        })
      }
    }
  }, [])

  useEffect(() => {
    async function fetchData() {
      if (token != null) {
        spotifyApi.setAccessToken(token)
        dispatch({
          type: 'SET_SPOTIFY',
          spotify: spotifyApi,
        })
        spotifyApi.getMe().then((user) =>
          dispatch({
            type: 'SET_USER',
            user: user,
          })
        )

        spotifyApi.getMyTopArtists().then((response) =>
          dispatch({
            type: 'SET_TOP_ARTISTS',
            top_artists: response,
          })
        )
        spotifyApi.getUserPlaylists().then((playlists) => {
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists,
          })
        })
      }
    }
    fetchData()

    // spotifyApi.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
    //   dispatch({
    //     type: "SET_DISCOVER_WEEKLY",
    //     discover_weekly: response,
    //   })
    // );
  }, [token])

 
  return (
    // <Router>
    <div className='app'>
      {!token && <Login />}
      {token && <Player  chooseTrack={ chooseTrack}/>}
    </div>
    // </Router>
  )
}

export default App
