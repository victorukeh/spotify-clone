import React from 'react'
import { useDataLayerValue } from './DataLayer'
import './sidebarOption.css'

function SidebarOption({ title, Icon, playlist }) {
  const [{ playlists }, dispatch] = useDataLayerValue()
  function choosePlaylist(playlist){
    dispatch({
      type: 'SET_PLAYLIST_TO_PLAY',
      choice: playlist
    })
  }
  function handleSelect() {
    choosePlaylist(playlist)
  }
  return (
    <div
      className='sidebarOption'
      style={{ cursor: 'pointer' }}
      onClick={handleSelect}
    >
      {Icon && <Icon className='sidebarOption__icon' />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SidebarOption
