import React from 'react';
import { FaBitcoin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaBitcoin className='icon' />
                <h1>Coin<span className='purple'>Market</span>Cap</h1>
            </div>
        </Link>
    )
}

export default Navbar;