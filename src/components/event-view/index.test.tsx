import React from 'react';

import { render, screen } from '@testing-library/react';

import { EventView } from '.';

const sampleData = [{
    displayName: '250v4 Rose Red Kids',
    stock: 500,
    participants: 900,
    sellThrough: 92.2,
    revenue: 130000,
}];

test('renders EventView', () => {
    render(<EventView events={sampleData} />);
});

test('renders Sale events h2', () => {
    render(<EventView events={sampleData} />);
    const headingElement = screen.getByText(/Sale events/i);
    expect(headingElement).toBeInTheDocument();
});
