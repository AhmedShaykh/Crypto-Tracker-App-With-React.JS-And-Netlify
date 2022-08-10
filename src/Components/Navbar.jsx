import React from 'react';
import { FaBitcoin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaBitcoin className='icon' />
                <h1 className='main-head'>Coin<span className='cyan'>Market</span>Cap</h1>
            </div>
        </Link>
    )
}

export default Navbar;