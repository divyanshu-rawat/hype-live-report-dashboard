import React from 'react';

import { render } from '@testing-library/react';

import { EventCard } from '.';

const sampleData = {
    displayName: '250v4 Rose Red Kids',
    stock: 500,
    participants: 900,
    sellThrough: 92.2,
    revenue: 130000,
};

test('renders EventCard', () => {
    render(<EventCard {...sampleData} />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<EventCard {...sampleData} />);
    expect(asFragment()).toMatchSnapshot();
});
