import React from 'react';

import { render, screen } from '@testing-library/react';

import { EventsAggregateView } from '.';

const sampleData = [{
    displayName: '250v4 Rose Red Kids',
    stock: 500,
    participants: 900,
    sellThrough: 92.2,
    revenue: 130000,
}];

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
