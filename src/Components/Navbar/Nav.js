import React from "react";
import "./Nav.css"
function Navbar(props){
    return(
        <div id="main">
        <div style={{width:"60%"}}>hello</div>
        <div id="two">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Users</a>
            <a href="#">Contacts</a>
        </div>
        </div>
    );
}
export default Navbar;