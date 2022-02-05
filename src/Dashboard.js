import React, { useState, useEffect } from 'react'
import { useDataLayerValue } from './DataLayer'
import SearchBar from 'material-ui-search-bar'
import TrackSearchResult from './TrackSearchResult'
import './Dashboard.css'

const Dashboard = ({ chooseTrack }) => {
  const [{ token, search, spotify }, dispatch] = useDataLayerValue()
  const [searchResults, setSearchResults] = useState([])

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
              // res.status(400).json({})
            }
           
          }
            
          
        }
      }
      fetchData()
    })()

    return () => (cancel = true)
  }, [search, token])

  return (
    <div className='dashboard' style={{ overflowY: 'scroll' }}>
      <br></br>
      <SearchBar
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
      />
      <br />
      <div className='flex-grow-1 my-2' style={{ height: '70vh' ,overflowY: 'scroll' }}>
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {/* {searchResults.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )} */}
      </div>
    </div>
  )
}

export default Dashboard
