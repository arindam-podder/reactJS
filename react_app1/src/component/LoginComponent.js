
import React from "react";
//import "./LoginComponent.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

export function Login(){
    return (
       // <h1>user login</h1>
       <React.Fragment>
       <div className="d-flex justify-content-center mt-4">
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
       </div>
    </React.Fragment>
    );

}