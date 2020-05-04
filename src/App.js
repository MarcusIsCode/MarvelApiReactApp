import React from "react";
import styled from 'styled-components'
import Nav from './Componenets/Pages/nav'
import FrontPage from './Componenets/Pages/frontpage'


import MarvelContexProvider from "./Componenets/context/sendToParent";
/**
1st Color#3A4750
2nd Color#303841
3rd Color#BE3144
 * 
 */
const AppDiv = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0px;
  margin: 0px;
  overflow-x: hidden;
`;




function App() {
 
  return (
    <AppDiv>
      <MarvelContexProvider>
        <Nav />
        <FrontPage />
      </MarvelContexProvider>
    </AppDiv>
  );
}

export default App;
