import React from "react"
import { useDataLayerValue } from './DataLayer'

const PlaylistView = () => {
    const [{ choice }, dispatch] = useDataLayerValue()
    return(
        <div>
            <div style={{display: flex}}>
                

            </div>
            <div>
                
            </div>
        </div>
    )
}

export default PlaylistView 
// export default function TrackSearchResult({ track, chooseTrack }) {
//   function handlePlay() {
//     chooseTrack(track)
//   }

//   return (
//     <div
//       className="d-flex m-2 align-items-center"
//       style={{ cursor: "pointer" }}
//       onClick={handlePlay}
//     >
//       <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
//       <div className="ml-3">
//         <div>{track.title}</div>
//         <div className="text-muted">{track.artist}</div>
//       </div>
//     </div>
//   )
// }

{/* <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
{searchResults.map(track => (
  <TrackSearchResult
    track={track}
    key={track.uri}
    chooseTrack={chooseTrack}
  />
))}
{searchResults.length === 0 && (
  <div className="text-center" style={{ whiteSpace: "pre" }}>
    {lyrics}
  </div>
)}
</div> */}
