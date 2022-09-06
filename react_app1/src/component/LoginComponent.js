
import React from "react";
import "./LoginComponent.css";


export function Login(){
    return (
       // <h1>user login</h1>
       <React.Fragment>
       <form>
       <h2>User Login</h2>
       <dl>
          <dt>User Name</dt>
          <dd><input type="text" className="frmInput"/></dd>
          <dt>Password</dt>
          <dd><input type="password" className="frmInput" /></dd>
       </dl>
       <button>Login</button>
       </form>
    </React.Fragment>
    );

}