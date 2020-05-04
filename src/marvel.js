 const apiKey ={
        Key (){
        const key = process.env.REACT_APP_PUBLIC_KEY;
        const hashed = process.env.REACT_APP_HASHED_KEY;
        const ts = process.env.REACT_APP_TS;

        return `ts=${ts}&apikey=${key}&hash=${hashed}`;
        }
    
    }
if(!process.env){
    console.log("no")
}else{
    console.log("yes")
}

const marvelApi = {
    constructor(){
         this.apiKey = new apiKey();
    },   
   
   character(name){
        return `https://gateway.marvel.com:443/v1/public/characters?name=${name}&limit=1&${apiKey.Key()}`
    },

    randCharacter(randNum){
        return `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=1&offset=${randNum}&${apiKey.Key()}`;     
    },
    inputSuggestions(letters){
        return `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${letters}&limit=6&${apiKey.Key()}`;
    }
 }
export default marvelApi;