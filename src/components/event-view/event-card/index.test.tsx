import React from 'react';

import { cleanup, render } from '@testing-library/react';

import { EventCard } from '.';

afterEach(cleanup);

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

test('title should equal to 250v4 Rose Red Kids', () => {
    const { getByTestId } = render(<EventCard {...sampleData} />);
    expect(getByTestId('EventCardTitle')).toHaveTextContent('250v4 Rose Red Kids');
});

it('should take a EventCard snapshot', () => {
    const { asFragment } = render(<EventCard {...sampleData} />);
    expect(asFragment()).toMatchSnapshot();
});
