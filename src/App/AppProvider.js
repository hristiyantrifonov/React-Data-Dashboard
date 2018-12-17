import React, { Component } from 'react';
import _ from 'lodash'

const cc = require('cryptocompare');

// Required to be initiated
export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends Component {

    // The initial state
    constructor(props){
        super(props);
        this.state = {
            page: 'dashboard',
            favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            ...this.savedSettings(), // spreading the result overwrites the state
            setPage: this.setPage, //Passing the function in the state
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount(){
        this.fetchCoins();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    }

    addCoin = (key) => {
        let favorites = [...this.state.favorites];
        if(favorites.length < MAX_FAVORITES){
            favorites.push(key);
            this.setState({favorites})
        }
    }

    removeCoin = (key) => {
        let favorites = [...this.state.favorites];
        // This is lodash command - pull value from array and return it
        this.setState({favorites: _.pull(favorites, key)})
    }

    isInFavorites = (key) => _.includes(this.state.favorites, key)


    confirmFavorites = () => {
        this.setState({
           firstVisit: false,
           page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            favorites: this.state.favorites
        }));
    }

    savedSettings = () => {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        console.log('Hereee', cryptoDashData);
        if(!cryptoDashData){
            return {page: 'settings', firstVisit: true}
        }
        let {favorites} = cryptoDashData;
        return {favorites};
    }

    setPage = (page) => {
        this.setState({page})
    }

    render(){
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
