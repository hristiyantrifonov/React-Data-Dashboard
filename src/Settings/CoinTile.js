import React from 'react';
import {AppContext} from "../App/AppProvider";
import {SelectableTile, DeletableTile, DisabledTile} from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from '../Shared/CoinImage';

/*
* This represent the main container of each coin grid cell
* that is displayed.
* */

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin){
    return topSection ? () => {
        removeCoin(coinKey)
    } : () => {
        addCoin(coinKey)
    }
}

const coinTile = (props) => {
    return <AppContext.Consumer>
        {({coinList, addCoin, removeCoin, isInFavorites}) => {
            let coin = coinList[props.coinKey];
            let TileClass = SelectableTile;
            if(props.topSection){
                TileClass = DeletableTile;
            }else if(isInFavorites(props.coinKey)){
                TileClass = DisabledTile;
            }
            return (
                <TileClass
                    onClick={clickCoinHandler(props.topSection, props.coinKey, addCoin, removeCoin )}>
                    <CoinHeaderGrid topSection={props.topSection} name={coin.CoinName} symbol={coin.Symbol}/>
                    <CoinImage coin={coin}/>
                </TileClass>);
        }}
    </AppContext.Consumer>
}

export default coinTile;