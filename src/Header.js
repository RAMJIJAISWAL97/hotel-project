import React, { useState } from 'react';
import './Header.css'; // Ensure to import the CSS file

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <h1>The Ramayana</h1>
            <button onClick={toggleMenu} className="menu-toggle">
                {isOpen ? 'Close' : 'Menu'}
            </button>
            <nav className={isOpen ? 'open' : ''}>
                <ul>
                    <li>Home</li>
                    <li>Bal Kand</li>
                    <li>Ayodhya Kand</li>
                    <li>Aranya Kand</li>
                    <li>Kishkindha Kand</li>
                    <li>Sundar Kand</li>
                    <li>Lanka Kand</li>
                    <li>Uttar Kand</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
