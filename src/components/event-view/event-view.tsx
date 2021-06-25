import React from 'react';

import { PrimaryTitle } from '../../theme/typography';
import { EventsAggregateViewType } from '../../types/global';
import { EventCard } from './event-card';
import { EventsWrapper } from './style';

export const EventView: React.FC<EventsAggregateViewType> = ({ events }) => (
    <>
        <PrimaryTitle>Sale events</PrimaryTitle>
        <EventsWrapper>
            {events && events.map(({ ...rest }) => <EventCard {...rest} />)}
        </EventsWrapper>
    </>
);
