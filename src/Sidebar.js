import React from 'react'
// import { Link } from "react-router-dom";
import SidebarOptions from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from './DataLayer'
import {Link} from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue()
  return (
    <div className='sidebar'>
      <img
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
        className='sidebar__logo'
      />
     <Link to ='/' style={{textDecoration:'none'}}><SidebarOptions Icon={HomeIcon} title='Home' /></Link>
      {/* <Link to="/search"> */}
      <Link to = '/search' style={{textDecoration:'none'}}><SidebarOptions Icon={SearchIcon} title='Search' /></Link>
      {/* </Link> */}
      <Link to = '/library' style={{textDecoration:'none'}}><SidebarOptions Icon={LibraryMusicIcon} title='Your Library' /></Link>
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />

      {playlists?.items !== 0 ? (
        playlists?.items?.map((playlist) => {
          return <Link to='/playlist' key={playlist.id} style={{textDecoration:'none'}}><SidebarOptions title={playlist.name} playlist={playlist} key={playlist.id} 
          // choosePlaylist={choosePlaylist}
          />
          </Link>
        })
      ) : (
        <SidebarOptions title='No Playlists yet' />
      )}  
    </div>
  )
}

export default Sidebar
