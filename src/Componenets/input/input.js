import styled from "styled-components";
import React from "react";
import PropTypes from 'prop-types';

const InputStyle = styled.input.attrs((props) =>({
    type :"text",
    placeholder:"Search for a Marvel character"
}))`
  
  font-size: 16px;
  background: white;
  height:33px;
  width:155px;
  border: none;
  border-radius: 4px;
  outline:transparent;
  box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.3);
`;

const InputBox = styled.div`
  border: 1px solid white;
  margin: 0px 10px;
  border-radius: 4px;
`;
const SuggestText = styled.p`
  color:red;
`;



const Input =(props)=>{
 
  return(
    <InputBox>
      <InputStyle
        onChange ={props.inputText}
     
      />
      <SuggestText>
      
      </SuggestText>

    </InputBox>

  )
  

}


Input.protoTypes = {
  inputText: PropTypes.any,
};
export default Input;