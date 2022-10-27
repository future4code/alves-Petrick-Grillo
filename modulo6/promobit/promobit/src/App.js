import { createGlobalStyle } from "styled-components";
import GlobalState from "./Global/GlobalState";
import { Router } from "./routes/Router";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  font-family: 'Roboto', sans-serif;
  max-height:100%;
  max-width:100%;
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
