import ImgNav from "../img/navImg";
import styled from "styled-components";
import axios from "axios";
import React, { useState,useContext } from "react";
import BoxRow from "./../view/boxRow";
import SearchForm from "./../Form/SearchForm";
import marvelApi from "../../marvel";
import getRandomInt from "../functions/number";
import { MarvelValueContext } from "../context/sendToParent";


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
 const { addMarvelValue } = useContext(MarvelValueContext);



 const fetchRandomMarvel = async () => {
   const response = await axios.get(
     marvelApi.randCharacter(getRandomInt(0, 1492))
   )
   addMarvelValue(response.data.data.results);
 };

 const fetchMarvel = async () => {
   const response = await axios.get(marvelApi.character(searchText));
   addMarvelValue(response.data.data.results);
 };

 /* const fetchSuggestion = async () => {
  const response = await axios.get(marvelApi.suggestText(searchText));
  setMarvelSuggest(response.data.data.results);
}; */

 

    return (
      <NavBox>
        <ImgNav />
        <BoxRow>
          <SearchForm
            inputText={(e) => setSearchText(e.target.value)}
            inputClick={fetchMarvel}
            randClick={fetchRandomMarvel}
           
          />
        </BoxRow>

      </NavBox>
    );
}



export default Nav;