import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import Body from './Body'
import Footer from './Footer'
import Library from './Library'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import './Player.css'

// Main Spotify Player Integration of Components
const Player = ({ chooseTrack }) => {
  return (
    <div className='player'>
      <div className='player__body'>
        {/* Sidebar */}
        <Sidebar />
        {/* Body and Footer*/}
        <div className='player__others'>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path='/search'
              element={<Dashboard chooseTrack={chooseTrack} />}
            />
            <Route
              path='/playlist'
              element={<Body chooseTrack={chooseTrack} />}
            />
            <Route
              path='/library'
              element={<Library/>}
            />
          </Routes>
          {/* <ShowPlaylist/> */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Player
