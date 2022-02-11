import React, { useEffect, useState } from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ClearIcon from '@material-ui/icons/Clear';
import { useDataLayerValue } from './DataLayer'
import SongRow from './SongRow'
import './Body.css'

// Body for the Playlists
function Body({ chooseTrack }) {
  const [{ spotify, choice, playingTrack, lyrics }, dispatch] = useDataLayerValue()
  const [music, setMusic] = useState(null)
  const [color, setColor] = useState('')

  function setLyrics() {
    dispatch({
      type: 'SET_LYRICS',
      lyrics: ''
    })
  }

  const changeColor = (e) => {
    if (color === '') {
      setColor({
        bgColor: '#90EE90'
      })
    } else{
      setColor({
        bgColor: '',
      })
    }
  }

  useEffect(() => {
    if (choice) {
      const search = choice?.id
      spotify.getPlaylist(search).then((response) =>
      setMusic(response)
      )
    }
  }, [choice])

  return (
    <div className='body'>
      <br></br>
      {!lyrics && <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='body__info'>
          <img
            style={{ borderRadius: '4px', padding: '10px', height: '30vh' }}
            src={choice?.images[0].url}
            alt=''
          />
          <div className='body__infoText'>
            <strong>PLAYLIST</strong>
            <h2>{choice?.name}</h2>
            <p>{choice?.description}</p>
          </div>
          <div className='body__icons'>
            <PlayCircleFilledIcon
              className='body__shuffle'
              style={{ cursor: 'pointer' }}
              // onClick={playPlaylist}
            />
            <FavoriteIcon
              fontSize='large'
              style={{ cursor: 'pointer', color: color.bgColor }}
              onClick={changeColor}
            />
            <MoreHorizIcon style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>}

      { !lyrics && <div className='body__songs'>
        <div className='music' style={{ height: '40vh', overflowY: 'scroll' }}>
          {music?.tracks.items.map((response) => (
            <SongRow
              track={response?.track}
              key={response.uri}
              chooseTrack={chooseTrack}
            />
          ))}
        </div>
      </div>}
      {playingTrack && lyrics && (
          <>
          <div className="text-center" style={{paddingTop: '3vh' ,overflowY: 'scroll', height: '70vh'}}>
            <div style={{marginLeft: '13%', display: 'flex', width: '50%', justifyContent: 'space-between'}}>
            {playingTrack && lyrics && <h2 style={{ marginLeft: '33%'}}>{playingTrack.artist}: {playingTrack.title} </h2>}
            {playingTrack && lyrics && <ClearIcon style={{cursor: 'pointer'}} onClick={setLyrics}/>}
            </div>
          
            <div style={{ justifyContent: 'center', marginLeft: '20%', width: '40%', fontSize: '18px',  whiteSpace:'pre'}}>
            {lyrics}
            </div>
          </div>
          </>
        )}
    </div>
  )
}

export default Body
