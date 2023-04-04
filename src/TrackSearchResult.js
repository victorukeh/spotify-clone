import React from 'react'
import './TrackSearchResult.css'

const TrackSearchResult = ({ track, chooseTrack}) => {
    function handlePlay(){
        chooseTrack(track)
    }
    return(
        <div className="container" onClick={handlePlay}>
            <img alt='' src={track.albumUrl} height="50" />
            <div className="texts">
                <p className="text__one">{track.title}</p>
                <p className="text__two">{track.artist}</p>
            </div>
        </div>
    )
}

export default TrackSearchResult

   