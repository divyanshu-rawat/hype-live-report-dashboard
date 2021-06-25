import React from 'react';

import { PrimaryTitle } from '../../theme/typography';
import { ProgressBar } from '../shared/progress-bar';
import { AggregateCard } from './aggregate-card';
import { Outline } from './style';

type EventsAggregateViewType = {
    aggregate: number
}

export const EventsAggregateView: React.FC<EventsAggregateViewType> = ({ aggregate }) => (

    <Outline>
        {' '}
        <PrimaryTitle>Summary</PrimaryTitle>
        <ProgressBar width={1000} percent={0.8} type="md" />
        <AggregateCard aggregate={aggregate} />
    </Outline>

);
