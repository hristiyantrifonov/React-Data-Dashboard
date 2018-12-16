import React from 'react';
import {AppContext} from "../App/AppProvider";
import {SelectableTile, DeletableTile} from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from '../Shared/CoinImage';

/*
* This represent the main container of each coin grid cell
* that is displayed.
* */

const coinTile = (props) => {
    return <AppContext.Consumer>
        {({coinList}) => {
            let coin = coinList[props.coinKey];
            let TileClass = SelectableTile;
            if(props.topSection){
                TileClass = DeletableTile;
            }
            return (
                <TileClass>
                    <CoinHeaderGrid topSection={props.topSection} name={coin.CoinName} symbol={coin.Symbol}/>
                    <CoinImage coin={coin}/>
                </TileClass>);
        }}
    </AppContext.Consumer>
}

export default coinTile;