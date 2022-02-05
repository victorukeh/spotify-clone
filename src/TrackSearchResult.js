import React from 'react'
import { useDataLayerValue } from './DataLayer'

const component = {
    height: "60px",
    width:'60px',
    borderRadius: '4px',
    marginRight: '2%'
}

const display = {
    display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'space-between',
    cursor: "pointer",
    margin: '0 10% 1%'
}
const TrackSearchResult = ({ track, chooseTrack}) => {
    const[{}, dispatch] = useDataLayerValue()
    function handlePlay(){
        chooseTrack(track)
    }
    return(
        <div className='d-flex m-2 align-items-center' style={display} onClick={handlePlay}>
            <img alt='' src={track.albumUrl} style={component}/>
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-muted" style={{color: '#f5f5f5'}}>{track.artist}</div>
            </div>
        </div>
    )
}

export default TrackSearchResult