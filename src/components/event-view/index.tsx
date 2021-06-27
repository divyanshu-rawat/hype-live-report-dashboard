/* eslint-disable react/no-array-index-key */
import React from 'react';

import { PrimaryTitle } from '../../theme/typography';
import { EventsAggregateViewType as EventViewType } from '../../types/global';
import { EventCard } from './event-card';
import { EventsWrapper } from './style';

export const EventView: React.FC<EventViewType> = ({ events }) => (
    <>
        <PrimaryTitle data-testid="EventViewTitle">Sale events</PrimaryTitle>
        <EventsWrapper>
            {events && events.map(({ ...rest }, index) => <EventCard key={index} {...rest} />)}
        </EventsWrapper>
    </>
);
