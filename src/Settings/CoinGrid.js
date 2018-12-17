import React from 'react';
import styled from 'styled-components';

import {AppContext} from "../App/AppProvider";
import CoinTile from "./CoinTile";

/*
* This component is wrapper containing every grid object of a coin
* which is each a CoinTile component
* */


export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
`

function getCoinsToDisplay(coinList, topSection, favorites) {
    return topSection ? favorites : Object.keys(coinList).slice(0, topSection ? 10 : 100);
}

const grid = (props) => {
    return <AppContext.Consumer>
        {({coinList, favorites}) =>
            <CoinGridStyled>
                {getCoinsToDisplay(coinList, props.topSection, favorites).map(coinKey =>
                    <CoinTile coinKey={coinKey} topSection={props.topSection}/>)}
            </CoinGridStyled>}
    </AppContext.Consumer>
}

export default grid;
