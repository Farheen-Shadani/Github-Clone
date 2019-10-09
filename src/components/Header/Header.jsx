import React from 'react';
import './Header.css'
function Header() {
    return (
    <header className="header">

        <section id="logo">
            <i class="fab fa-github"></i>

            <nav>
                <a>Why GitHub? <i class="fas fa-chevron-down"></i></a>
                <a>Enterprise</a>
                <a>Explore <i class="fas fa-chevron-down"></i></a>
                <a>Marketplace</a>
                <a>Pricing <i class="fas fa-chevron-down"></i></a>
            </nav>
        </section>

        <section id="btns">
            <button className="search-btn"><input placeholder="Search Github"></input></button>

            <button className="signIn-btn">Sign in</button>

            <button className="signUp-btn">Sign up</button>
        </section>

    </header>);
}
    export default Header;