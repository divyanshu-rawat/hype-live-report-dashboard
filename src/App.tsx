/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect } from 'react';

import styled from '@emotion/styled';

import { fetchData } from './utils/index';

const AppContainer = styled.div``;

export const App: React.FC = () => {
  useEffect(() => {
    fetchData().then((events) => {
      console.log(events);
    });
  }, []);
  return (
    <AppContainer>
      <header className="App-header">
        <p>Hello </p>
      </header>
    </AppContainer>
  );
};
