import styled from "styled-components";
import React from "react";
import PropTypes from 'prop-types';

const InputStyle = styled.input.attrs((props) =>({
    type :"text",
    placeholder:"Search for a Marvel character",
    value:props.value
}))`
  
  font-size: 16px;
  background: white;
  height:33px;
  width:155px;
  border: none;
  outline:transparent;
 
  &::placeholder{
    font-size:11px;
  }
`;

const InputBox = styled.div`
  border: 2px solid white;
  margin: 0px 10px;
  border-radius: 4px;
  height: 35px;
  box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.3);
`;
const SuggestBox = styled.div`
  color:red;
  background:white;
`;

const Ul = styled.ul`
  border-top: 1px solid white;
  margin: 0px;
  padding: 0px;
  width: 100%;

  li {
    list-style-type: none;
    color: black;
    padding: 5px;
    border: 1px solid #dddddd;
    &:hover {
      cursor: pointer;
      background: #dddddd;
    }
    &:active {
      background: #919191;
      border-color: #919191;
    }
  }
`;


const Input =(props)=>{
  return(
    <InputBox>
      <InputStyle
        onChange ={props.inputText}
        value ={props.value}
      />
      <SuggestBox>
       <Ul list ={props.list}>
         {props.list}
       </Ul>
      </SuggestBox>

    </InputBox>

  )
  

}


Input.protoTypes = {
  inputText: PropTypes.any,
  list: PropTypes.string,
  value:PropTypes.string,
};
export default Input;