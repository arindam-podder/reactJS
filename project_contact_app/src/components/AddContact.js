import React from "react";

class AddContact extends React.Component{
/*    constructor(props){
        super();
        this.state = {
            name : "",
            email : "",
        }
    };   */
    state = {
        name : "",
        email : ""
    };

    Add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("name and email should present.");
            return;
        }
        this.props.addContactHandler(this.state);       //got it from App.js as a props
        this.setState({name:"", email:""});
    } 

    render(){
        return(
            <div style={{margin:"30px"}}>
                <h3> Add Contact</h3>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter name"  
                        value={this.state.name}
                        onChange={(event)=> this.setState({name : event.target.value})}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter mail"
                        value={this.state.email}
                        onChange={(event)=>this.setState({email : event.target.value})}
                    />
                    <br />
                    <button type="button" onClick={this.Add}> Add</button>
            </div>
        )
            
    }
}

export default AddContact;