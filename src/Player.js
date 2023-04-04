import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Body from "./Body";
import Footer from "./Footer";
import Library from "./Library";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import "./Player.css";

// Main Spotify Player Integration of Components
const Player = ({ chooseTrack }) => {
  const [active, setActive] = useState(true);
  console.log("Active: ", active)
  return (
    <div className="player">
      <div className="player__body">
        {/* Sidebar */}
        <Sidebar setActive={setActive}/>
        {/* Body and Footer*/}
        <div className="player__others">
        {active && <Home />}
          <Routes>
            <Route index element={<Home/>} />
            {/* <Route path="/">
                  <Redirect to="/search"></Redirect>
                </Route> */}
            <Route path="/home" element={<Home />}/>
            <Route
              path="/search"
              element={<Dashboard chooseTrack={chooseTrack}/>}
            />
            <Route
              path="/playlist"
              element={<Body chooseTrack={chooseTrack}/>}
            />
            <Route path="/library" element={<Library />}/>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Player;
