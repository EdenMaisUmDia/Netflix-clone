import React from "react";
import './Header.css';


export default ({black}) => {

    return (
        <header className= {black ? 'black' : ''}>

            <div className="header--logo">
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="netflix"></img>
                </a>
            </div>

            <div className="header--user">
            
                <a href="/" alt="logo">
                 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="deu ruim"></img>
                </a>
            </div>
        </header>
    );


}