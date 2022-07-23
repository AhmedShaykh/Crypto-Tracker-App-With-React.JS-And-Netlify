import React from 'react';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import Coin from '../Routes/Coin';

const Coins = (props) => {
    return (
        <div className='containner'>
            <div>
                <div className="heading">
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'> Market Cap</p>
                </div>

                {props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}

export default Coins;