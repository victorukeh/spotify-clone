import { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-node'
import { useDataLayerValue } from './DataLayer'
import useAuth from './useAuth'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import { Container, Form } from 'react-bootstrap'
import Body from './Body'
import Footer from './Footer'
import './Player.css'

const spotify = new SpotifyWebApi({
  clientId: '13f6b6132cde494f9d7c84b475b1f049',
})
const Player = ({code}) => {
  const [{ user, playlists, token, search }, dispatch] = useDataLayerValue()
  const accessToken = useAuth(code)
  const [searchResults, setSearchResults] = useState([])
  console.log(searchResults)

  useEffect(() => {
    if (!accessToken) return
    if(!searchResults) return setSearchResults([])
    if(searchResults){
      dispatch({
        type: "SET_SONGS",
        songs: searchResults
      })
    }
  }, [searchResults])
  
  useEffect(() => {
    if (!accessToken) return
    if(accessToken){
      dispatch({
        type: "SET_TOKEN",
        token: accessToken 
      })
    }
      spotify.setAccessToken(accessToken)
      spotify
        .getMe()
        .then((user) => {
          dispatch({
            type: 'SET_USER',
            user: user,
          })
        })
        .catch((err) => {
          console.log(err)
        })
      spotify
        .getUserPlaylists().then((playlists) => {
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists: playlists,
          })
        })
        
    
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) return
    if (!search) return setSearchResults([])
    let cancel = false
    spotify
    .searchTracks(search)
    .then((res) => {
      if (cancel) return
        setSearchResults(
          res.body.tracks.items.map((track) => {
            const smallestAlbumImage = track.album.images.reduce(
              (smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest
              },
              track.album.images[0]
            )
            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: smallestAlbumImage.url,
            }
          })
        )
    })
    return () => (cancel = true)
  }, [accessToken, search])
  
  return (
      <div className='player'>
        <div className='player__body'>
          {/* Sidebar */}
          <Sidebar />
          {/* Body */}
          
           <Dashboard searchResults={searchResults}/> 
        </div>

        {/* Footer */}
        <Footer />
      </div>
  )
}

export default Player
