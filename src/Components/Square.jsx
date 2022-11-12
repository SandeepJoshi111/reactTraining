import { useState } from "react";

export default function Square(props){
   // const [ value, setvalue ] = useState(null); //react hook
    
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}