import ImgNav from "../img/navImg";
import styled from "styled-components";
import axios from "axios";
import React, {useContext,useEffect } from "react";
import BoxRow from "./../view/boxRow";
import SearchForm from "./../Form/SearchForm";
import marvelApi from "../../marvel";
import getRandomInt from "../functions/number";
import { MarvelValueContext } from "../context/sendToParent";
import Suggestions from "./../input/inputSugest";

const NavBox = styled.div`
  width: 100%;
  height: 10vh;
  margin: 0px;
  background: #ed1d24;
  padding: 5px 0px;
  border-bottom: 2px solid white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position:fixed;
  z-index:1;
`;

const Nav = ()=>{
  
 //const [marvel, setMarvel] = useState(null);
 const [searchText, setSearchText] = React.useState("");
  const [suggest, setSuggest] = React.useState("");

 const { addMarvelValue } = useContext(MarvelValueContext);


//fetches a random marvel
 const fetchRandomMarvel = async () => {
   const response = await axios.get(
     marvelApi.randCharacter(getRandomInt(0, 1492))
   )
   addMarvelValue(response.data.data.results);
  
 };
 
//fetches the marvel you searched for
 const fetchMarvel = async () => {
   const response = await axios.get(marvelApi.character(searchText));
   addMarvelValue(response.data.data.results);
 };
 //when the page loads
 useEffect((marvelValue) => {
   if (marvelValue === undefined) {
     fetchRandomMarvel();
   }
     // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []); 

 

function handleChange(e){
    const fetchSuggestion = async () => {
      const response = await axios.get(marvelApi.suggestText(e.target.value));
      let nameArray = [];
      response.data.data.results.forEach(char=>{
    
          nameArray.push(char.name)
      })
     
     setSuggest(nameArray);
     
    }; 
  
   setSearchText(e.target.value)
    if(e.target.value !== ""){
           fetchSuggestion();
    }
    if (e.target.value === "") {
       setSuggest([]);
    }
}


  function handleClick(e) {
    let targetText = e.target.innerHTML
    setSearchText(targetText);
    setSuggest([])
  }
 

    return (
      <NavBox>
        <ImgNav />
        <BoxRow>
          <SearchForm
            inputText={(e) => handleChange(e)}
            inputClick={fetchMarvel}
            randClick={fetchRandomMarvel}
            list ={Suggestions(suggest,handleClick)}
            value={searchText}
          />
        </BoxRow>

      </NavBox>
    );
}



export default Nav;