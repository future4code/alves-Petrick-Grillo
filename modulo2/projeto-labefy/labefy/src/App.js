import React from "react";
import styled from "styled-components";
import axios from "axios";
import CriarPlaylist from "./components/CriarPlaylist"
import Playlist from "./components/Playlists"

const MainContainer = styled.div`
height:100vh;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <CriarPlaylist />
        {/* <Playlist/> */}
      </MainContainer>
    )
  }
}
export default App;
