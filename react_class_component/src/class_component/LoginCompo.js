import React from 'react';

export class LoginClassComponent extends React.Component{
    constructor(){
        super();            //base class take some property as param ..check plz
    }

    //class property
    title = 'User Login';


    //class method
    btnClick(){
        alert("login btn clicked.")
    }

    //in class compo , through render() method we have to send html code/jsx   
    render(){
        return(
            <div>
                <h3> {this.title} </h3>
                <form>
                    <dl>
                        <dt>User name</dt>
                        <dd><input type="text" /></dd>
                        <dt>Password</dt>
                        <dd><input typr="password" /></dd>
                        <button type="button" onClick={this.btnClick}>Login</button>
                    </dl>
                </form>
            </div>
        )
    }
}