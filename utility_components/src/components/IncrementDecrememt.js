//import React from "react";
import { useState } from "react";

//creating Functional react component
export default function Counter(){
    //const [counter, setCounter] = React.useState(0) ; 
    const [counter, setCounter] = useState(0) ;
    //const [incrementValue, setIncrementValue] = useState(1) ;
    //const [decrementValue, setDecrementValue] = useState(1) ;
    
    const increaseCount = function(){
        setCounter(counter + 1);
    }

    const decreaseCount = function(){
        if(counter == 0){
            AlertModal();
        }
        setCounter( counter>0 ? counter-1 : 0 );
    }

    return(
        <>
            <button onClick={increaseCount}>increment</button>
            <button onClick={decreaseCount}>decrement</button> 
            
            <h3>Result : {counter} </h3>
        </>
    );
}//end Counter component

function AlertModal(){
    return(
        <>
            {alert("Already value is Zero. Can't decrease more.")}
        </>
    );
}
