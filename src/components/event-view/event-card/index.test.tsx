import React from 'react';

import { render } from '@testing-library/react';

import { EventCard } from '.';

test('renders EventCard', () => {
    const sampleData = {
        displayName: '250v4 Rose Red Kids',
        stock: 500,
        participants: 900,
        sellThrough: 92.2,
        revenue: 130000,
    };
    render(<EventCard {...sampleData} />);
});
