import React from 'react'
import './TrackSearchResult'

const TrackSearchResult = ({ track, chooseTrack}) => {
    function handlePlay(){
        chooseTrack(track)
    }
    return(
        <div className='d-flex m-2 align-items-center' style={display} onClick={handlePlay}>
            <img alt='' src={track.albumUrl} className='display__image' />
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-muted" style={{color: '#f5f5f5'}}>{track.artist}</div>
            </div>
        </div>
    )
}

export default TrackSearchResult

const display = {
    display: 'flex',
    cursor: "pointer",
    margin: '0 10% 1%',
} 
   