import React from "react"

export default function Navbar() {
    document.documentElement.className = localStorage.theme || 'theme-white';

    function toggleTheme() {
        if (localStorage.getItem('theme') === 'theme-black') {
            setTheme('theme-white');
        } else {
            setTheme('theme-black');
        }
    }

    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

    return (
        <nav class="navbar navbar-expand-lg bg-info fixed-top" >
            <div class="container">
            <a href="#aboutme--section" class="navbar-brand">Jorge Chávez</a>
        
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-warning" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a aria-current="page" href="#Home__Section">Home</a>
                    </li>
                    <li class="nav-item">
                        <a aria-current="page" href="#About__Section">About</a>
                    </li>
                    <li class="nav-item">
                        <a aria-current="page" href="#Portfolio__Section">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a aria-current="page" href="#Contactme__Section">Contact Me</a>
                    </li>
                    <li class="nav-item align-moon">
                        <i className="fa-solid fa-moon" onClick={toggleTheme}></i>
                    </li>
                </ul>
                </div>
            </div>
        
            
            </div>
        </nav>
    )
}
