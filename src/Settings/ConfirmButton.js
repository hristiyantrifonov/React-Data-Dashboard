import React from 'react';
import styled from 'styled-components';

import {AppContext} from "../App/AppProvider";
import {fontSize1, greenBoxShadow, color3} from "../Shared/Styles";

const ConfirmedButtonStyled = styled.div`
    margin: 20px
    color: ${color3};
    ${fontSize1}
    padding: 5px
    cursor: pointer;
    &:hover {
        ${greenBoxShadow}
    }
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