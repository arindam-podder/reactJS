import "./class_bind.css";
import { useState } from "react";

export function CssClassBind(){

    const [theme, setTheme] = useState("non-dark")
    const users = [{name:"Arindam"}, {name:"Arjun"}, {name:"Jhone"} ]
    const [userErrorClass, setUserErrorClass] = useState("")
    const [userVerificationMsg, setUserVerificationMsg] = useState("")

    function ChengeTheme(event){
        if(event.target.checked){
            setTheme("dark")        //here 'dark' scc class name in class_bind.css file
        }else{
            setTheme("non-dark")
        }
    }

    function verifyUser(event){
        for(var user of users){
            if(user.name === event.target.value){
                setUserErrorClass("nameError")
                setUserVerificationMsg("name already taken.")
                break;        //IMP plz understand
            }else{
                setUserErrorClass("nameSuccess")
                setUserVerificationMsg("User name available.")
            }
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center full-page-height">
            <div id="loginBox" className={theme}>
                <h3>Login to aplication</h3>
                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Dark-theme</label>
                    <input onChange={ChengeTheme} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                </div>      
                <dl>
                    <dt>Usre Name</dt>
                    <dd> <input onChange={verifyUser} type="text" /> </dd>
                    <dd className={userErrorClass}>{userVerificationMsg}</dd>
                    <dt>Password</dt>
                    <dd> <input type="Password" /> </dd>
                </dl>
            </div>
        </div>
    )
}