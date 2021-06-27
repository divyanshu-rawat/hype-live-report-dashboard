import React from 'react';

import { cleanup, render } from '@testing-library/react';

import { EventView } from '.';
import { sampleData } from './constant';

afterEach(cleanup);

test('renders EventView', () => {
    render(<EventView events={sampleData} />);
});

test('title should equal to Sale events', () => {
    const { getByTestId } = render(<EventView events={sampleData} />);
    expect(getByTestId('EventViewTitle')).toHaveTextContent('Sale events');
});

it('should take a EventView snapshot', () => {
    const { asFragment } = render(<EventView events={sampleData} />);
    expect(asFragment()).toMatchSnapshot();
});
