import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';

import Aux from '../hoc/Auxiliary/Auxiliary';
import WelcomeMessage from './WelcomeMessage';

const MyButton = styled.button`
    color: green;
    
    ${props => props.primary && css`
        background: #ffe;
        color: palevioletred;
    `}
`

const TomatoButton = styled(MyButton)`
    color: tomato;
    border-color: tomato;
`

class Index extends Component {
  render() {
    return (
        <Aux>
            <WelcomeMessage/>
            <MyButton>Hello</MyButton>
            <MyButton primary>Hello</MyButton>
            <TomatoButton primary>Hello</TomatoButton>
        </Aux>
    );
  }
}

export default Index;
