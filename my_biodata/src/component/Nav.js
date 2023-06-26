import React from "react";
import "../styles/style-nav.css";


function NavBar() {

    const linksBG = () => {
        const resumeLi = document.getElementsByClassName('activeLinks')[0]
        resumeLi.style.backgroundColor = "#333";
    }

    const linksBGAdd = () => {
        const resumeLi = document.getElementsByClassName('activeLinks')[0]
        resumeLi.style.backgroundColor = "#555";
    }


    return(
        <nav className="navbar">
            <div className="brand-title">MyData</div>
            <div class="navbar-links">
                <ul>
                    <li className="activeLinks"> <a className="nav-link active me-4" aria-current="page" href="#">Resume</a> </li>
                    <li id="socialMedia" onMouseOver={linksBG} onMouseOut={linksBGAdd}> <a className="nav-link dropdown" aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"> Social Media </a>  </li>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar;