import React, { useEffect, useState } from 'react'
import { useDataLayerValue } from './DataLayer'
import CategoryPlaylists from './CategoryPlaylists'
import './Home.css'
const Home = () => {
  const [{ category, spotify }, dispatch] = useDataLayerValue()
  const [categoryID, setCategoryID] = useState()
  // const [categoryPlaylist, setCategoryPlaylist] = useState()

  // useEffect(() => {

  // }, [categories])

  return (
    <div className='home'>
      {category?.categories.items.map((result) => (
        <>
          <h1 className='home__title'>{result.name}</h1>
          <CategoryPlaylists key={result.id} id={result.id}/>
          </>
      ))}
    </div>
  )
}

export default Home
{
  /* {<p key={category.id}> {response.playlists?.items} </p> } */
}
{
  /* <p key={playlist.id}> {playlist.name}</p> */
}
