/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect } from 'react';

import styled from '@emotion/styled';

import { EventsAggregateView } from './components/events-aggregate-view/events-aggregate-view';
import { GlobalStyles } from './theme/global';
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
      <GlobalStyles />
      <EventsAggregateView />
    </AppContainer>
  );
};
