import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';

import AppLayout from './AppLayout';
import AppBar from './AppBar';
import Aux from '../hoc/Auxiliary/Auxiliary';
import WelcomeMessage from './WelcomeMessage';

class Index extends Component {
  render() {
    return (
        <Aux>
            <AppLayout>
                <AppBar/>
                <WelcomeMessage/>
            </AppLayout>
        </Aux>
    );
  }
}

export default Index;
