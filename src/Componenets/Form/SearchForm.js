import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import BoxRow from "../view/boxRow"

import Input from "./../input/input"
import Button from "./../Button/Button";
import ButtonImg from "./../img/buttonImg"
import zoom from "./../../assets/zoom.png";
import game from "./../../assets/game.svg";

const Formbox = styled.form.attrs(() => ({}))`
  display: flex;
  flex-direction: row;
  top:15px;
  position:absolute;

`;


const SearchForm =(props)=>{
  
    
   
    return (
      <BoxRow>
        <Formbox
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input inputText={props.inputText} />
          <BoxRow>
            <Button onClick={props.inputClick}>
              <ButtonImg img={zoom} />
            </Button>
            <Button onClick={props.randClick}>
              <ButtonImg img={game} />
            </Button>
          </BoxRow>
        </Formbox>
      </BoxRow>
    );
}
SearchForm.protoTypes ={
  inputText:PropTypes.any, 

  inputClick: PropTypes.func,
  randClick: PropTypes.func
 
}

export default SearchForm;