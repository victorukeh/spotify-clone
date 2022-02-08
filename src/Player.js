import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDataLayerValue } from './DataLayer'
import Sidebar from './Sidebar'
import ShowPlaylist from './ShowPlaylist'
import Dashboard from './Dashboard'
import Body from './Body'
import Footer from './Footer'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import './Player.css'

const Player = ({ chooseTrack }) => {
  const [{ token, choice }, dispatch] = useDataLayerValue()

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
          </Routes>
          {/* <ShowPlaylist/> */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Player
