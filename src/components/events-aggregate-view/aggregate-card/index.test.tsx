import React from 'react';

import { render } from '@testing-library/react';

import { AggregateCard } from '.';
import { lightGreen } from '../../../theme/color';
import { AppIcon } from '../../../types/icon-types';

test('renders AggregateCard', () => {
    render(<AggregateCard
        aggregate={2100}
        title="Units Sold"
        background={lightGreen}
        icon={AppIcon.UnitSold}
    />);
});
