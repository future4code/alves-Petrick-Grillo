import React from "react";
import styled from "styled-components";
import axios from "axios";
import CriarPlaylist from "./components/CriarPlaylist"
import Playlist from "./components/Playlists"


class App extends React.Component{
  render(){
    return(
      <div>
  <CriarPlaylist/>
  {/* <Playlist/> */}
      </div>
    )
  }
}
export default App;
