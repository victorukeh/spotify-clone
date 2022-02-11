import React, {useState} from 'react'
import { useDataLayerValue } from './DataLayer'

const CategoryPlaylists =({ id }) => {
  const [{ spotify }] = useDataLayerValue()
  const [categoryPlaylists, setcategoryPlaylists] = useState()
  const options = {
    "country":'NG',
    "limit" : 9,
  }
  spotify.getCategoryPlaylists(id, options).then((response) => {
    setcategoryPlaylists(response)
  })


  return (
    <>
      {categoryPlaylists!== null ? categoryPlaylists?.playlists.items.map((playlist) => (
          <div className='category__body' style={{}} key={playlist.id}>
            <div style={{width: '100px  ', height: '10vh', background: 'black'}}>
            {playlist.images[0].url === null ? '': <img style={{width: '10vh'}}src={playlist.images[0].url} alt=''/>}
            </div>
          </div>      
      )): ''}
    </>
  )
}

export default CategoryPlaylists
