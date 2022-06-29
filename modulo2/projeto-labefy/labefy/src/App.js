import React from "react";
import styled from "styled-components";
import axios from "axios";
import CriarPlaylist from "./components/CriarPlaylist"
import Playlist from "./components/Playlists"
import { createGlobalStyle } from 'styled-components';

const MainContainer = styled.div`
`
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', sans-serif;
  }
`;



class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <GlobalStyle/>
        <CriarPlaylist />
        {/* <Playlist/> */}
      </MainContainer>
    )
  }
}
export default App;
