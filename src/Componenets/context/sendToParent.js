import React, { createContext, useState } from 'react';

export const MarvelValueContext = createContext();

const MarvelContextProvider = (props) => {
  const [marvelValue, setMarvelValue] = useState([null]);

  const addMarvelValue =(value)=>{
    setMarvelValue(()=>(value))
  }
  return (
    <MarvelValueContext.Provider value={{marvelValue, addMarvelValue}}>
      {props.children}
    </MarvelValueContext.Provider>
  )
}

export default MarvelContextProvider;
 

