import React, { Component } from 'react';
import './App.css';

import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Aux from '../hoc/Auxiliary/Auxiliary';
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
