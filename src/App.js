import React, { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import axios from 'axios'
import Login from './Login'
import Player from './Player'
import { useDataLayerValue } from './DataLayer'
import { getTokenFromResponse } from './spotify'
import './App.css'

const spotifyApi = new SpotifyWebApi()

function App() {
  //Fetching states from the reducr using Context API
  const [{ token, playingTrack }, dispatch] = useDataLayerValue()

  function chooseTrack(track) {
    dispatch({
      type: 'SET_PLAYINGTRACK',
      playingTrack: track,
    })
    dispatch({
      type: 'SET_SEARCH',
      search: '',
    })
    dispatch({
      type: 'SET_LYRICS',
      lyrics: '',
    }) 
  }

  // Fetch lyrics from the Baackend
  useEffect(() => {
    if (!playingTrack) return
    axios
      .get('http://localhost:8000/lyrics', {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then((res) => {
        console.log(res.data)
        dispatch({
          type: 'SET_LYRICS',
          lyrics: res.data.lyrics,
        }) 
      })
  }, [playingTrack])

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
        const options = {
          "country": 'NG',
          "limit" : 1,
        }
        spotifyApi.getCategories(options).then((response) => {
          dispatch({
            type: 'SET_CATEGORIES',
            category: response,
          })
        })
      }
    }
    fetchData()
  }, [token])

  return (
    // Entry Point
    <div className='app'>
      {!token && <Login />}
      {token && <Player chooseTrack={chooseTrack} />}
    </div>
  )
}

export default App
