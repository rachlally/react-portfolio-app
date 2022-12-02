import React from 'react';
import '../styles/Header.css';
import Navigation from './Navigation';

function Header (){
    return (
        <header className="header">
            <p>Rachel Lally</p>
            <Navigation/>
        </header>
    )
}

export default Header;