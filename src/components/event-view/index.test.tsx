import React from 'react';

import { render, screen } from '@testing-library/react';

import { EventView } from '.';
import { sampleData } from './constant';

test('renders EventView', () => {
    render(<EventView events={sampleData} />);
});

test('renders Sale events h2', () => {
    render(<EventView events={sampleData} />);
    const headingElement = screen.getByText(/Sale events/i);
    expect(headingElement).toBeInTheDocument();
});

it('matches snapshot', () => {
    const { asFragment } = render(<EventView events={sampleData} />);
    expect(asFragment()).toMatchSnapshot();
});
