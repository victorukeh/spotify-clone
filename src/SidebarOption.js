import React from 'react'
import './sidebarOption.css'

function SidebarOption({ title, Icon, playlist, choosePlaylist }) {
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
