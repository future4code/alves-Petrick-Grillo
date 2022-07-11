import React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import AdminHomePage from "./pages/AdminHomePage";
import { useState } from "react";

function App() {
 const [tela, setTela] = useState(1)
const screen  = () =>{
switch (tela){
  case 1:
    return <AdminHomePage tela1={onClickTelaP} tela2 ={onClickTelaM}/>
    case 2:
      return
}}
const onClickTelaP = () => {
  setTela(2)
}
const onClickTelaM = () => {
  setTela(3)
}
  return (
    <ChakraProvider>
    {screen()}
    </ChakraProvider>
  );
}

export default App;
