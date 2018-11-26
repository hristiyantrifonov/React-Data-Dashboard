import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';

import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Aux from '../hoc/Auxiliary/Auxiliary';
import WelcomeMessage from './WelcomeMessage';


class Index extends Component {
  render() {
    return (
        <Aux>
            <AppLayout>
                <AppProvider>
                    <AppBar/>
                    <WelcomeMessage/>
                </AppProvider>
            </AppLayout>
        </Aux>
    );
  }
}

export default Index;
