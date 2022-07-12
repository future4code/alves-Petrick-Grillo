import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./routes/Router";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </div>
  );
}

export default App;
