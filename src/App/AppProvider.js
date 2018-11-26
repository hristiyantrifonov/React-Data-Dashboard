import React, { Component } from 'react';

export const AppContext = React.createContext();

export class AppProvider extends Component {

    // The initial state
    constructor(props){
        super(props);
        this.state = {
            page: 'dashboard',
            setPage: this.setPage //Passing the function in the state
        }
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
