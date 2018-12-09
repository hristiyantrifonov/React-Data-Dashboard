import React from 'react';
import {AppContext} from "../App/AppProvider";

const pageComponent = (props) => {
    return <AppContext.Consumer>
        {({page}) => {
            if(page === props.name){
                return <div>{ props.children }</div>
            }
            return null;
        }}
    </AppContext.Consumer>
}

export default pageComponent;