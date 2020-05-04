const characterValue =(val)=>{
    if (val[0]) {
      
        const char = {
          Name: val[0].name,
          Img: val[0].thumbnail.path +"."+ val[0].thumbnail.extension,
          Description: val[0].description,
        };
        return char
    }else{
        return "undefined"
    }
}
export default characterValue;