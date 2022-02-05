import React, { useEffect, useState } from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import SongRow from './SongRow'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

function Body({ chooseTrack }) {
  const [music, setMusic] = useState(null)
  const [color, setColor] = useState('')
  const [{ spotify, choice }, dispatch] = useDataLayerValue()

  const changeColor = (e) => {
    if (color.bgColor === '#90EE90') {
      setColor({
        bgColor: ''
      })
    } 
    if (color.bgColor === '') {
      setColor({
        bgColor: '#90EE90',
      })
    }
  }

  useEffect(() => {
    if (choice) {
      const search = choice?.id
      spotify.getPlaylist(search).then((response) =>
        // dispatch({
        //   type: "SET_DISCOVER_WEEKLY",
        //   discover_weekly: response,
        // })
        // console.log(response)
        setMusic(response)
      )
    }
    console.log('This is the music = ', music)
  }, [choice])

  return (
    <div className='body'>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
      </div>

      <div className='body__songs'>
        <div style={{ height: '40vh', overflowY: 'scroll' }}>
          {music?.tracks.items.map((response) => (
            // console.log('This is the result = ',response?.track)
            <SongRow
              track={response?.track}
              key={response.uri}
              chooseTrack={chooseTrack}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Body
