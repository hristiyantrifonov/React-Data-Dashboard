import React from 'react';
import styled from 'styled-components';

import {AppContext} from "../App/AppProvider";

const ConfirmedButtonStyled = styled.div`
    margin: 20px
    color: green;
    cursor: pointer;
`

const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`

const confirmButton = () => {
    return (
        <CenterDiv>
            <AppContext.Consumer>
                {({confirmFavorites}) =>
                    <ConfirmedButtonStyled onClick={confirmFavorites}>
                        Confirm Favorites
                    </ConfirmedButtonStyled>}
            </AppContext.Consumer>
        </CenterDiv>
    );
}

export default confirmButton;