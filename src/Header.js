import React from 'react'
import './Header.css'
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";
import { useDataLayerValue } from './DataLayer'

const Header = ({spotify}) => {
    const [{ user }, dispatch] = useDataLayerValue();
    return(
      <div>
        
      </div>
    )
}

export default Header

