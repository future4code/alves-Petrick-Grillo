import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AdminHomePage from "./pages/AdminHomePage";
import ListTripsPage from "./pages/ListTripsPage";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import { createGlobalStyle } from "styled-components";
import ApplicationFormPage from "./pages/ApplicationFormPage"
import CreateTripPage from "./pages/ApplicationFormPage"

const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  padding: 0;
  /* background-color:purple; */
}
`
function App() {
  const [tela, setTela] = useState(1)
  const screen = () => {
    switch (tela) {
      case 1:
        return <HomePage tela1={onClickTelaTrips} tela2={onClickTelaAdmin} />
      case 2:
        return <ListTripsPage tela0={onClickTelaMain} tela4={onClickTelaInscricao} />
      case 3:
        return <AdminHomePage tela0={onClickTelaMain} tela5={onClickTelaCreate} />
      case 4:
        return <ApplicationFormPage tela1={onClickTelaTrips}  />
      case 7:
        return <CreateTripPage tela3={onClickTelaAdmin}/>
        default: 
   console.log("Nacionalidade não    encontrada")
    }
  }
  const onClickTelaTrips = () => {
    setTela(2)
  }
  const onClickTelaMain = () => {
    setTela(1)
  }
  const onClickTelaInscricao = () => {
    setTela(4)
  }
  const onClickTelaAdmin = () => {
    setTela(3)
  }
  const onClickTelaCreate = () => {
    setTela(7)
  }
  return (
    <div>
      <GlobalStyle />
      <ChakraProvider>
        {screen()}
      </ChakraProvider>
    </div>
  );
}

export default App;
