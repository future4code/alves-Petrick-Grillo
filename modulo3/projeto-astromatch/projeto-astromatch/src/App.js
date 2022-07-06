import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Perfis from "./components/Perfis";
import Matches from "./components/Matches";
import { useEffect, useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
const MainConteiner = styled.div`
height:100vh;
background-color:cyan;
`
const Card = styled.div`
display:flex;
justify-content:center;
align-items:center;
    `
function App() {
  const [tela, setTela] = useState(1)

  const screen = () => {
    switch (tela) {
      case 1:
        return <Perfis tela={onClickTelaP} />
      case 2:
        return <Matches tela1={onClickTelaM} />
    }
  }

  const onClickTelaP = () => {
    setTela(tela + 1)
  }
  const onClickTelaM = () => {
    setTela(tela - 1)
  }

  return (
    <MainConteiner>
      <GlobalStyle />
      <Card>
      {screen()}
      </Card>
    </MainConteiner>
  );
}

export default App;
