import React, {useEffect, useState} from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { useDataLayerValue } from './DataLayer'
import './Footer.css'

const Footer = () => {
  const [{ token, playingTrack }, dispatch] = useDataLayerValue()
  const [play, setPlay] = useState(false)
  const trackUri = playingTrack?.uri
  console.log(trackUri)
 
  useEffect(() => setPlay(true), [trackUri])
  if (!token) return null
  return (
    <div className='footer'>
        <SpotifyPlayer
        style={{color: '#333'}}
          token={token}
          showSaveIcon
          callback={state => {
            if (!state.isPlaying) setPlay(false)
          }}
          play={play}
          uris={trackUri ? [trackUri] : []}
        />
    </div>
  )
}

export default Footer
  

