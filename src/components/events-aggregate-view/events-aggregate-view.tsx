import React from 'react';

import { Title } from '../../theme/typography';
import { ProgressBar } from '../shared/progress-bar';
import { Outline } from './style';

export const EventsAggregateView: React.FC = () => (

    <Outline>
        {' '}
        <Title>Summary</Title>
        <ProgressBar width={300} percent={0.5} />
    </Outline>

);
