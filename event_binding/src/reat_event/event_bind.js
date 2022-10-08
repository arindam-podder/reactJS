import { useState } from "react"

export function MouseEvent(){

    const [imgSize, setImgSize] = useState({width:"300px", height:"400px"})

    function stopAnimation(e){
        document.getElementById("imgAnimation").stop()
        setImgSize({width:"350px", height:"500px"}) 
    }
    function startAnimation(e){
        document.getElementById("imgAnimation").start()
        setImgSize({width:"300px", height:"400px"})
    }

    return (
        <div style={{marginTop:"15px"}}>
            <marquee  id="imgAnimation" scrollAmount="6">
                <img onMouseOver={stopAnimation} onMouseOut={startAnimation} src="images/life_lesson1.png" style={imgSize}/>
                <img onMouseOver={stopAnimation} onMouseOut={startAnimation} src="images/life_lesson2.png" style={imgSize}/>
                <img onMouseOver={stopAnimation} onMouseOut={startAnimation} src="images/life_lesson3.png" style={imgSize}/>
                <img onMouseOver={stopAnimation} onMouseOut={startAnimation} src="images/life_lesson4.png" style={imgSize}/>
            </marquee>
        </div>
    )
}


export function KeyEvent(){

    const users = [{userName:"Arindam"}, {userName:"Arjun"}]
    const [userError, setUserError] = useState("")
    const [capsWarning, setCapsWarning] = useState({display:"none"})

    function VerifyPassword(e){
        if((e.keyCode>=65 && e.keyCode<=90)||(e.which>=65 && e.which<=90)) {
            setCapsWarning({display:'block', color:"yellow"});
        } else {
            setCapsWarning({display:'none'});
        }
    }
    function VerifyUser(e){
        for(var user of users){
          if(user.userName==e.target.value){
             setUserError("User Name Taken - Try Another");
             break;
          } else {
             setUserError("User Name Available.");
          }
        }
     }


    return(
        <div style={{marginTop:"10px", marginLeft:"200px"}}>
            <h3>User Login</h3>
            <dl>
                <dt>User name</dt>
                <dd> <input onKeyUp={VerifyUser} type="text"  /> </dd>
                <dd>{userError}</dd>
                <dt>Password</dt>
                <dd> <input onKeyPress={VerifyPassword} type="password" /> </dd>
                <dd style={capsWarning} > Caps ON </dd>
            </dl>
        </div>
    )
} 





















