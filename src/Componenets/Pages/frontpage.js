import React, { useContext } from "react";
import FrontPageBox from "./../view/frontpageBox";
import Character from "./../content/character"
import characterValue from "./../functions/marvelValue"
import { MarvelValueContext } from "../context/sendToParent";

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