const characterValue =(val)=>{
    if (val[0]) {
        let imgSafe =
          val[0].thumbnail.path +
          "/portrait_uncanny." +
          val[0].thumbnail.extension;
        imgSafe = imgSafe.replace("http:", "https:")
        const char = {
          Name: val[0].name,
          Img: imgSafe,
          Description: val[0].description,
        };
        return char
    }else{
        return "undefined"
    }
}
export default characterValue;