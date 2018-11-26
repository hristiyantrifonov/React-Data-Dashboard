import React from 'react';
import styled, { css } from 'styled-components'

import {AppContext} from "../../App/AppProvider";

const ControlButtonElem = styled.div`
    cursor: pointer;
    
    ${props => props.active && css`
        text-shadow: 0px 0px 60px #03ff03
    `}
`

function toProperCase(lower){
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

// Object destructuring - it is going to extract the name property
const controlButton = (props) => (
    <AppContext.Consumer>
        { ({page, setPage}) => (
            <ControlButtonElem
                active={page === props.name}
                onClick={() => setPage(props.name)}
            >
                {toProperCase(props.name)}
            </ControlButtonElem>
        ) }
    </AppContext.Consumer>
);

export default controlButton;