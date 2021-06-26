import React from 'react';

import { render, screen } from '@testing-library/react';

import { EventsAggregateView } from '.';
import { sampleData } from './constant';

test('renders EventsAggregateView', () => {
    render(<EventsAggregateView
        events={sampleData}
    />);
});

test('renders Summary h2', () => {
    render(<EventsAggregateView events={sampleData} />);
    const headingElement = screen.getByText(/Summary/i);
    expect(headingElement).toBeInTheDocument();
});
