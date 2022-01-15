import React from 'react'
// import { Link } from "react-router-dom";
import SidebarOptions from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from './DataLayer'
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
      <SidebarOptions Icon={HomeIcon} title='Home' />
      {/* <Link to="/search"> */}
        <SidebarOptions Icon={SearchIcon} title='Search'/>
        {/* </Link> */}
      <SidebarOptions Icon={LibraryMusicIcon} title='Your Library' />
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />

      {playlists > 0   ? (playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))) : (<SidebarOptions  title='No Playlists yet' /> )}
    </div>
  )
}

export default Sidebar
