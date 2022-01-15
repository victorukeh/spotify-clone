import React from 'react'

const TrackSearchResult = ({track}) => {
    return(
        <div className='d-flex m-2 align-items-center' style={{cursor: "pointer"}}>
            <img alt='' src={track.albumUrl} style={{height: "64px", width:'64px'}}/>
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>

        </div>
    )
}

export default TrackSearchResult