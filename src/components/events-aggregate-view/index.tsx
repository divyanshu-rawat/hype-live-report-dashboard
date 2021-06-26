import React from 'react';

import {
    lightGreen, lightBrown, lightBlue, lightRed,
} from '../../theme/color';
import { PrimaryTitle } from '../../theme/typography';
import { EventsAggregateViewType } from '../../types/global';
import { AppIcon } from '../../types/icon-types';
import { aggregateData, aggregateUnitSold } from '../../utils/index';
import { ProgressBar } from '../shared/progress-bar';
import { AggregateCard } from './aggregate-card';
import { AggregateCardWrapper, Outline } from './style';

export const EventsAggregateView: React.FC<EventsAggregateViewType> = ({ events }) => {
    const unitSold: number = aggregateUnitSold(events);
    const participants: number = aggregateData(events, 'participants');
    const revenue: number = aggregateData(events, 'revenue');
    const aggregateStocks: number = aggregateData(events, 'stock');
    const cancellation: number = aggregateStocks - unitSold;
    const aggregateSellThroughRate: number = parseFloat((unitSold / aggregateStocks).toFixed(2));

    return (
        <Outline>
            {' '}
            <PrimaryTitle>Summary</PrimaryTitle>
            <ProgressBar width={1100} percent={aggregateSellThroughRate} type="md" />
            <AggregateCardWrapper>
                <AggregateCard
                    aggregate={unitSold}
                    title="Units Sold"
                    background={lightGreen}
                    icon={AppIcon.UnitSold}
                />
                <AggregateCard
                    aggregate={participants}
                    title="Participants"
                    background={lightBrown}
                    icon={AppIcon.PeopleGroup}
                />
                <AggregateCard
                    aggregate={revenue}
                    title="Revenue"
                    background={lightBlue}
                    icon={AppIcon.Dollar}
                />
                <AggregateCard
                    aggregate={cancellation}
                    title="Cancellation"
                    background={lightRed}
                    icon={AppIcon.Cross}
                />
            </AggregateCardWrapper>
        </Outline>
    );
};
