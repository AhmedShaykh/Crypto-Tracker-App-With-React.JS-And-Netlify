import React from 'react';
import { FaBitcoin } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='navbar'>
            <FaBitcoin className='icon' />
            <h1>Coin <span className='purple'>Market </span>Cap</h1>
        </div>
    )
}

export default Navbar;