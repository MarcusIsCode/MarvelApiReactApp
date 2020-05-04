import React, { useContext } from "react";
import styled from "styled-components";
import Character from "./../content/character"
import characterValue from "./../functions/marvelValue"
import { MarvelValueContext } from "../context/sendToParent";


const FrontPageBox = styled.div`
  position: relative;
  top: 10vh;
  margin: 0 auto;
  width: 100%;
  min-height: 90vh;
  padding-bottom:40px;
  height:auto;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(69, 86, 102, 1) 0%,
    rgba(34, 34, 34, 1) 90%
  );
  display: flex;
  align-items: center;
  flex-direction: column;
`;






const FrontPage = ()=>{
const {marvelValue } = useContext(MarvelValueContext);
if(marvelValue[0]){
  console.log(marvelValue);
  console.log(characterValue(marvelValue).Name)
}  

  
    return (
      <FrontPageBox>
        <Character
          img={characterValue(marvelValue).Img}
          Name={characterValue(marvelValue).Name}
          Text={characterValue(marvelValue).Description}
         
        />
      </FrontPageBox>
    );
}

export default FrontPage;