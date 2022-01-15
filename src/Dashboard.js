import React, { useState, useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useDataLayerValue } from './DataLayer'
import Player from './Player'
import SearchBar from 'material-ui-search-bar'
import TrackSearchResult from './TrackSearchResult'
import './Dashboard.css'
import SpotifyWebApi from 'spotify-web-api-node'
import useAuth from './useAuth'

const Dashboard = ({ code }) => {
  const [{ findSearch, songs }, dispatch] = useDataLayerValue()
  const [search, setSearch] = useState('')
  console.log('place for songs', songs[0])
  useEffect(() => {
    if (search) {
      dispatch({
        type: 'SET_SEARCH',
        search: search,
      })
    }
  }, [search])
  return (
    <Container className='dashboard d-flex flex-column py-2'>
      <Form.Control
        type='search'
        value={search}
        placeholder='Search Songs/Artists'
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1>Dashboard</h1>

      <div className='flex-grow-1 my-2' style={{ overflowY: 'auto' }}>
        {songs.map((track) => {
          ;<TrackSearchResult track={track} key={track.uri} />
        })}
        Songs
      </div>
    </Container>
  )
}

export default Dashboard

{
  /* <SearchBar
        style={{
          margin: '5% auto',
          maxWidth: 800,
        }}
        placeholder='Search Songs/Artists'
        value={search}
        type='search'
        // onChange={(e) => setSearch(e.target.value)}
        onChange={(e) => setSearch(e.target.value)}
      /> */
}
