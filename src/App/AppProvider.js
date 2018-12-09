import React, { Component } from 'react';

const cc = require('cryptocompare');

// Required to be initiated
export const AppContext = React.createContext();

export class AppProvider extends Component {

    // The initial state
    constructor(props){
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.savedSettings(), // spreading the result overwrites the state
            setPage: this.setPage, //Passing the function in the state
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

    confirmFavorites = () => {
        this.setState({
           firstVisit: false,
           page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello'
        }));
    }

    savedSettings = () => {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        console.log('Hereee', cryptoDashData);
        if(!cryptoDashData){
            return {page: 'settings', firstVisit: true}
        }
        return {};
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
