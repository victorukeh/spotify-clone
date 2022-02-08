import React, {useState} from 'react'
import { useDataLayerValue } from './DataLayer'

const CategoryPlaylists =({ id }) => {
  const [{ spotify }, dispatch] = useDataLayerValue()
  const [categoryPlaylists, setcategoryPlaylists] = useState()
  spotify.getCategoryPlaylists(id).then((response) => {
    setcategoryPlaylists(response)
  })

  // console.log(response)
  return (
    <>
      {categoryPlaylists?.playlists.items.map((playlist) => (
        <p key={playlist.id}> {playlist.name} </p>
      ))}
    </>
  )
}

export default CategoryPlaylists
