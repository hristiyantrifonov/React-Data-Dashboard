import React from 'react';

const coinImage = (props) => {
    return <img
        alt={props.coin.CoinSymbol}
        style={props.style || {height: '50px'}}
        src={`http://cryptocompare.com/${props.coin.ImageUrl}`}
    />
}

export default coinImage;