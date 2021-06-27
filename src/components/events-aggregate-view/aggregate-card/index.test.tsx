import React from 'react';

import { cleanup, render } from '@testing-library/react';

import { AggregateCard } from '.';
import { lightGreen } from '../../../theme/color';
import { AppIcon } from '../../../types/icon-types';

afterEach(cleanup);

test('renders AggregateCard', () => {
    render(<AggregateCard
        aggregate={2100}
        title="Units Sold"
        background={lightGreen}
        icon={AppIcon.UnitSold}
    />);
});

test('AggregateCardTitle should equal to Participants', () => {
    const { getByTestId } = render(<AggregateCard
        aggregate={88500}
        title="Participants"
        background={lightGreen}
        icon={AppIcon.Dollar}
    />);
    expect(getByTestId('AggregateCardTitle')).toHaveTextContent('Participants');
});

it('should take a AggregateCard snapshot', () => {
    const { asFragment } = render(<AggregateCard
        aggregate={88500}
        title="Participants"
        background={lightGreen}
        icon={AppIcon.Dollar}
    />);
    expect(asFragment()).toMatchSnapshot();
});
