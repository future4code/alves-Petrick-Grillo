import React from "react";
import GlobalState from "./Global/GlobalState";
import { Router } from "./routes/Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background: #EFEFEF;
}
`
function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}

export default App;
