import styled from 'styled-components';


const Button = styled.button.attrs((props)=>({
  type:"submit",
}))`
  font-family: 'Roboto', sans-serif;
  font-size:18px;
  border: none;
  margin: 0px 4px;
  padding: 10px 8px;
  background-color: white;
  color:black;
  border-radius:50%;
  outline:transparent;
  box-shadow:1px 3px 5px 1px rgba(0,0,0,0.5);
  width:44px;
  height:44px;
 
  &:hover{
      cursor:pointer;
      transform:scale(1.09)
  }
  &:active{
      transform:scale(0.95);
     
  }
`;

export default Button;