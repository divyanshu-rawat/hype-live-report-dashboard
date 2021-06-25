import React from 'react';

import { PrimaryTitle } from '../../theme/typography';
import { EventCard } from './event-card';

export const EventView: React.FC = () => (
    <>
        <PrimaryTitle>Sale events</PrimaryTitle>

        <EventCard />
    </>
);
