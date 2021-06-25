import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { EventsAggregateView } from './components/events-aggregate-view/events-aggregate-view';
import { GlobalStyles } from './theme/global';
import { eventType, fetchData } from './utils/index';

const AppContainer = styled.div`
  width: 1086px;
  margin: 0 auto;
`;

interface IObjectKeys {
  [key: string]: any;
}

const AggregateData = (events: eventType[], field: string): number => events
  .map((o: IObjectKeys) => o[field])
  .reduce((a, c) => a + c);

export const App: React.FC = () => {
  const [unitsSold, setUnitsSold] = useState(0);
  useEffect(() => {
    fetchData().then((events) => {
      setUnitsSold(AggregateData(events, 'sellThrough'));
    });
  }, [unitsSold]);
  return (
    <AppContainer>
      <GlobalStyles />
      <EventsAggregateView aggregate={unitsSold} />
    </AppContainer>
  );
};
