/*        //Shoppingcart.js
import { useReducer } from "react";

let initialState = {count: 0};
function reducer(state, action){
    switch(action.type){
        case "add":
        return {count: state.count + 1};
        case "remove":
        return {count: state.count - 1};
    }
}

export function ShoppingCart()
{
    const [state, dispatch] = useReducer(reducer,initialState);

    function AddClick(){
        dispatch({type:"add"});
    }
    function RemoveClick(){
        dispatch({type:"remove"});
    }
    return(
        <div>
            <h3> <span className="bi bi-cart4"></span> Your Cart [{state.count}]</h3>
            <button onClick={AddClick}>Add</button>
            <button onClick={RemoveClick}>Remove</button>
        </div>
    )
}   */

import { useReducer } from "react";


const totalCartItem = 0;

function totalCartItemChange(currentVal, action){
    switch(action.perform){
        case "add":
            return currentVal+1;
            break;
        case "remove":
            if(currentVal == 0){
                alert("nothing is in cart.") 
                return currentVal;
            }else{
                return currentVal-1;
            }
            break;
        default:
            return currentVal;
    }
}



export function HookUseReducer(){

    const [state, action] = useReducer(totalCartItemChange, totalCartItem)

    function addItem(){
        action( {perform:"add"} )
    }
    function removeItem(){
        action( {perform:"remove"} )
    }

    return(
        <div>
            <button onClick={addItem}>Add item</button> <br />
            <button onClick={removeItem}>Remove item</button>

            <h6>cart items [{state}]</h6>
        </div>
    )
}










