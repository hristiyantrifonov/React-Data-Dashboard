import React from 'react';
import styled from 'styled-components';

import ControlButton from '../components/ControlButton/ControlButton';

const Logo = styled.div`
    font-size: 1.5em;
`

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 100px 100px;
`

const appBar = () => {
    return(
      <Bar>
          <Logo>CryptoDash</Logo>
          <div/>  {/*Nice hack to fill up space*/}
          <ControlButton name="dashboard" active/>
          <ControlButton name="settings"/>
      </Bar>
    );
}

export default appBar;