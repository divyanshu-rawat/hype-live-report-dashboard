import React from 'react';

import { render, screen } from '@testing-library/react';

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

test('renders PrimaryNumericTitle h2', () => {
    render(<AggregateCard
        aggregate={6183}
        title="Units Sold"
        background={lightGreen}
        icon={AppIcon.UnitSold}
    />);
    const headingElement = screen.getByText(/6183/i);
    expect(headingElement).toBeInTheDocument();
});

test('renders StyledSubTitle p', () => {
    render(<AggregateCard
        aggregate={88500}
        title="Participants"
        background={lightGreen}
        icon={AppIcon.Dollar}
    />);
    const paragraphElement = screen.getByText(/Participants/i);
    expect(paragraphElement).toBeInTheDocument();
});
