import React from 'react';
import styled, { css } from 'styled-components';

const ControlButtonElem = styled.div`
    cursor: pointer;
    
    // Make it respond to different props
    ${props => props.active && css`
        text-shadow: 0px 0px 60px #03ff03
    `}
`

function toProperCase(lower){
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

// Object destructuring - it is going to extract the name property
const controlButton = ({name, active}) => {
    return (
        <ControlButtonElem active={active}>
            {toProperCase(name)}
        </ControlButtonElem>
    )
};

export default controlButton;