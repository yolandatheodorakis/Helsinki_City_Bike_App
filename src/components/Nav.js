import React from 'react';

import '../styles/nav.css';

const Nav = () => {
    return (
        <nav className='navbar'>
            <ul className='nav-items'>
                <li className='nav-item'>Journeys</li>
                <li className='nav-item'>Stations</li>
            </ul>
        </nav>
    )
}

export default Nav;
