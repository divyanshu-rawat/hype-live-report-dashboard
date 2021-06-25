import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { EventsAggregateView } from './components/events-aggregate-view/events-aggregate-view';
import { GlobalStyles } from './theme/global';
import { fetchData, eventType } from './utils/index';

const AppContainer = styled.div`
  width: 1086px;
  margin: 0 auto;
`;

export const App: React.FC = () => {
  const [events, setEvents] = useState<eventType[]>([]);
  useEffect(() => {
    fetchData().then((response) => setEvents(response));
  }, [events]);
  return (
    <AppContainer>
      <GlobalStyles />
      {events.length > 0 && <EventsAggregateView events={events} />}
    </AppContainer>
  );
};
