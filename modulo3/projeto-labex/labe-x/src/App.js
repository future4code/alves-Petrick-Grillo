import React from "react";
import { Router } from "./routes/Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans', sans-serif;
}
p {
  margin: 0;
}
body{
  background:#27282c;
  max-height:100vh;
  max-width:100vw;
  /* display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column; */
}
button{
position:relative;
background:#444;
color: #fff;
text-decoration:none;
text-transform:uppercase;
font-size:1em;
letter-spacing:0.1em;
padding: 10px 15px;
margin:10px;
transition:0.5s;
:hover{
  letter-spacing:0.25em;
}
:before{
  position:absolute;
  inset:2px;
  background: #27282c;
}}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
