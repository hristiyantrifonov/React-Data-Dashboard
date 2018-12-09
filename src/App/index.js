import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';

import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Aux from '../hoc/Auxiliary/Auxiliary';
import WelcomeMessage from '../Settings/WelcomeMessage';
import Settings from '../Settings';
import Content from '../Shared/Content';


class Index extends Component {
  render() {
    return (
        <Aux>
            <AppLayout>
                <AppProvider>
                    <AppBar/>
                    <Content>
                        <Settings/>
                    </Content>
                </AppProvider>
            </AppLayout>
        </Aux>
    );
  }
}

export default Index;
