import React from 'react';
import {AppContext} from "../App/AppProvider";
import {SelectableTile} from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from '../Shared/CoinImage';

/*
* This represent the main container of each coin grid cell
* that is displayed.
* */

const coinTile = (props) => {

    const TileClass = SelectableTile;

    return <AppContext.Consumer>
        {({coinList}) => {
            let coin = coinList[props.coinKey];
            const TileClass = SelectableTile;
            return (
                <TileClass>
                    <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol}/>
                    <CoinImage coin={coin}/>
                </TileClass>);
        }}
    </AppContext.Consumer>
}

export default coinTile;