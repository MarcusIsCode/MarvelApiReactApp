import React from "react"
import getRandomInt from "./../functions/number";
function Suggestions(props,func) {
        if(props){
            let i = getRandomInt(0, 100);
            return props.map((props) => (
              <li key={(i++).toString()}
                 onClick={func}>
                {props}
              </li>
            ));
            }
            
 
}
export default Suggestions