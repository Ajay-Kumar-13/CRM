import React, { useEffect, useState } from "react";

function Navbar() {

    const [isHamburgerMenuOpen, setHamburgerMenuStatus] = useState(false);
    
    const media = window.matchMedia('(width < calc(800 / 16 * 1rem))');

    const closeHamburgerMenu = () => {
        document.getElementById("btnOpen").setAttribute("aria-expanded", "false");
        document.getElementById("btnClose").setAttribute("aria-expanded", "false");
    }

    const handleHamburgerMenu = () => {

        if(!media.matches) {
            closeHamburgerMenu();   
        }
    }

    const updateMenu = () => {
        document.getElementById("sideBarToogle").setAttribute("aria-expanded", "false");
        if(isHamburgerMenuOpen) {
            document.getElementById("btnOpen").setAttribute("aria-expanded", "false");
            setHamburgerMenuStatus(false);
            document.getElementById("sideBarToogle").style.removeProperty("z-index");

        } else {
            document.getElementById("btnOpen").setAttribute("aria-expanded", "true");
            setHamburgerMenuStatus(true)
            document.getElementById("sideBarToogle").style.zIndex = "-1";
        }
    }

    media.addEventListener("change", handleHamburgerMenu);


    return (
        <div className="background-blue">
            <div className="wrapper">
                <div className="navbar">
                    <div className="nav-brand">
                        <h1>CRM</h1>
                    </div>
                    <div className="nav-profile">
                        <img src="/images/Rukmini Maharani.jpeg" className="profile-photo"/>
                        <div className="username">
                            Rukmini
                        </div>
                    </div>
                </div>
                <button id="btnOpen" className="topnav__open" aria-expanded="false" onClick={updateMenu}>
                    <img src="/images/hamburger.svg" className="hamburgerMenu__openBtn" width="20" height="16"/>
                </button>
                <button id="btnClose" className="topnav__close" aria-expanded="false" onClick={updateMenu}>
                    <img src="/images/close.svg" className="hamburgerMenu__clsBtn" width="20" height="16"/>
                </button>
                <div className="nav__links-content">
                    <div className="nav__links">
                        <a href="#" className="nav__link active">Dashboard</a>
                        <a href="#" className="nav__link">Contacts</a>
                        <a href="#" className="nav__link">Companies</a>
                        <a href="#" className="nav__link">Leads</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;