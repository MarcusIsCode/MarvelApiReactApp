import React from "react";
import PropTypes from "prop-types";
import CharacterBox from "./../view/characterView";
import H2 from "../text/H2";
import Text from "./../text/text";
import MarvelImg from "./../img/marvelImg";

const Character =(props)=>{
    
    return(

     <CharacterBox>
         <MarvelImg img={props.img} />
         <H2 props={props.Name}>{props.Name}</H2>
        <Text props={props.Text}>{props.Text}</Text>
    </CharacterBox>
        )

}
PropTypes.Character ={
        Name: PropTypes.string,
        Text: PropTypes.string,
        img:PropTypes.string
}

export default Character;