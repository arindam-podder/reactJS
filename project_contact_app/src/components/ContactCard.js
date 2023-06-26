import React, { useState } from "react";

 

export const CardContact = (props) => {
    var { id, name, email } = props.contact;
    
    const [ data, setData ] = useState({id:id, name:name, email:email})

    
    return (
        <div style={{padding:"5px"}}>
            <div>
                <img src="images/icons8-contacts.svg" alt="loading..."/>
                <p>name : {name} </p>
                <p>email : {email}</p>
                <button onClick={ (e) => {
                    e.preventDefault();
                    document.getElementById("updateModal").style.display="block";
                }}> Update </button> &nbsp;
                <button onClick={ (e) => props.deleteOne(id) }> Delete </button>
            </div>

            <div id="updateModal" style={{display:"none"}}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter name"  
                    value={data.name}
                    onChange={ (event)=> setData( {id:id, name: event.target.value, email:data.email}) }
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter mail"
                    value={data.email}
                    onChange={ (event)=> setData( {id:id, name:data.name, email: event.target.value}) }
                />
                <br />
                <button type="button" onClick={()=> {
                    props.updateOne(data) 
                    document.getElementById("updateModal").style.display="none";}
                }> Confirm Udate</button>
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("updateModal").style.display="none";    
                }}> Cancel</button>
            </div>
            <hr />
        </div>
    );
} //CardContact end