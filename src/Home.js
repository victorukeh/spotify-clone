import React from 'react'
// import { useDataLayerValue } from './DataLayer'
// import CategoryPlaylists from './CategoryPlaylists'
import './Home.css'
const Home = () => {
  //   const [{ category, spotify }, dispatch] = useDataLayerValue()
  //   const [categoryID, setCategoryID] = useState()
  //   // const [categoryPlaylist, setCategoryPlaylist] = useState()

  //   // useEffect(() => {

  //   // }, [categories])

  return (
    <div className='home'>
      <div className='home__content'>
        <h1 style={{ fontSize: '30px' }}>Coming Soon...</h1>
      </div>
    </div>
  )
}

export default Home
// {
//   /* {<p key={category.id}> {response.playlists?.items} </p> } */
// }
// {
//   /* <p key={playlist.id}> {playlist.name}</p> */
// }
//       {category?.categories.items.map((result) => (
//         <div key={result.id} className='home__content'>
//           <h1 className='home__title'>{result.name}</h1>
//           <div className='home__playlists' style={{display: 'flex', justifyContent: 'space-around'}}>
//           <CategoryPlaylists key={result.id} id={result.id}/>
//           </div>
//         </div >
// ))}
