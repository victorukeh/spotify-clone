import React, { useState, useEffect } from 'react'
import { useDataLayerValue } from './DataLayer'
import SearchBar from 'material-ui-search-bar'
import ClearIcon from '@material-ui/icons/Clear';
import TrackSearchResult from './TrackSearchResult'
import './Dashboard.css'

const Dashboard = ({ chooseTrack }) => {
  const [{ token, search, lyrics, playingTrack, spotify }, dispatch] = useDataLayerValue()
  const [searchResults, setSearchResults] = useState([])

  function setLyrics() {
    dispatch({
      type: 'SET_LYRICS',
      lyrics: ''
    })
  }

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!token) return

    let cancel = false
    ;(async () => {
      async function fetchData() {
        if (token != null) {
          console.log('search =',search)
          const {tracks} = await spotify.searchTracks(search)   
          if (cancel) return
          if(tracks){
            try{
              setSearchResults(
                tracks.items.map((track) => {
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
            }
            catch(err){
              console.log(err)
            }      
          }
            
          
        }
      }
      fetchData()
    })()

    return () => (cancel = true)
  }, [search, token])

  
  return (
    <div className='dashboard'>
      <br></br>
      {!lyrics && <SearchBar
        style={{
          margin: 'auto',
          maxWidth: 800,
          minWidth: 80,
        }}
        type='search'
        value={search}
        placeholder='Search Songs/Artists'
        onChange={(newValue) =>
          dispatch({
            type: 'SET_SEARCH',
            search: newValue,
          })
        }
      />}
      <br />
      <div className='search__results flex-grow-1 my-2' style={{ height: '70vh' ,overflowY: 'scroll' }}>
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {searchResults.length === 0 && (
          <>
          <div className="text-center">
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
    </div>
  )
}

export default Dashboard
