import React, { useEffect, useState } from 'react';

import { PrimaryTitle } from '../../theme/typography';
import { AggregateData, AggregateUnitSold, eventType } from '../../utils/index';
import { ProgressBar } from '../shared/progress-bar';
import { AggregateCard } from './aggregate-card';
import { AggregateCardWrapper, Outline } from './style';

type EventsAggregateViewType = {
    events: eventType[]
}

export const EventsAggregateView: React.FC<EventsAggregateViewType> = ({ events }) => {
    const [aggregateData, setAggregateData] = useState({
        unitSold: 0,
        participants: 0,
        revenue: 0,
        cancellation: 0,
    });

    const [aggregateSellThroughRate, setAggregateSellThroughRate] = useState<number>(0);
    useEffect(() => {
        const unitSold: number = AggregateUnitSold(events);
        const participants: number = AggregateData(events, 'participants');
        const revenue: number = AggregateData(events, 'revenue');
        const aggregateStock: number = AggregateData(events, 'stock');
        const cancellation: number = (aggregateStock - unitSold);

        setAggregateData({
            unitSold, participants, revenue, cancellation,
        });

        setAggregateSellThroughRate(parseFloat((unitSold / aggregateStock).toFixed(2)));
    }, [events]);

    return (
        <Outline>
            {' '}
            <PrimaryTitle>Summary</PrimaryTitle>
            <ProgressBar width={1000} percent={aggregateSellThroughRate} type="md" />
            <AggregateCardWrapper>
                <AggregateCard aggregate={aggregateData.unitSold} title="Units Sold" />
                <AggregateCard aggregate={aggregateData.participants} title="Participants" />
                <AggregateCard aggregate={aggregateData.revenue} title="Revenue" />
                <AggregateCard aggregate={aggregateData.cancellation} title="Cancellation" />
            </AggregateCardWrapper>
        </Outline>
    );
};
