import React from 'react';
import {AppContext} from "../App/AppProvider";

const contentComponent = (props) => {
    return <AppContext.Consumer>
        {({coinList}) => {
            if(!coinList){
                return <div>Loading Coins...</div>
            }
            return <div>{ props.children }</div>
        }}
    </AppContext.Consumer>
};

export default contentComponent;