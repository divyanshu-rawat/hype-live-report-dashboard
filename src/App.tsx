import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { EventView } from './components/event-view';
import { EventsAggregateView } from './components/events-aggregate-view';
import { GlobalStyles } from './theme/global';
import { PrimaryTitle } from './theme/typography';
import { eventType } from './types/global';
import { fetchData } from './utils/index';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(PrimaryTitle)`
  text-align: center; 
  font-weight: 600;
`;

export const App: React.FC = () => {
  const [events, setEvents] = useState<eventType[]>([]);
  useEffect(() => {
    fetchData().then((response) => setEvents(response));
  }, [events]);
  return (
    <AppContainer>
      <GlobalStyles />
      <Title>Hype Live Report</Title>
      {events.length > 0 && <EventsAggregateView events={events} />}
      {events.length > 0 && <EventView events={events} />}
    </AppContainer>
  );
};


