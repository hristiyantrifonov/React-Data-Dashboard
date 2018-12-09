import React from 'react';
import styled from 'styled-components';

/*
*  The actual component that comprises main info about the coin
*  It is rendered inside CoinTile.
* */

export const CoinHeaderGridStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
    justify-self: right;
`;

const coinHeaderGrid = (props) => {
    return (
        <CoinHeaderGridStyled>
            <div> {props.name} </div>
            <CoinSymbol> {props.symbol} </CoinSymbol>
        </CoinHeaderGridStyled>);
}

export default coinHeaderGrid;