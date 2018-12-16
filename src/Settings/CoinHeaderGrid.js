import React from 'react';
import styled from 'styled-components';
import {DeletableTile} from "../Shared/Tile";

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

const DeleteIcon = styled.div`
    justify-self: right;
    display: none;
    ${DeletableTile}:hover & {
        display: block;
        color: red;
    }
`

const coinHeaderGrid = (props) => {
    return (
        <CoinHeaderGridStyled>
            <div> {props.name} </div>
            {props.topSection ? (<DeleteIcon> X </DeleteIcon>) : (<CoinSymbol> {props.symbol} </CoinSymbol>)}
        </CoinHeaderGridStyled>);
}

export default coinHeaderGrid;