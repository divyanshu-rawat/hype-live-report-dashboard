import React from 'react';

import { cleanup, render } from '@testing-library/react';

import { EventsAggregateView } from '.';
import { sampleData } from './constant';

afterEach(cleanup);

test('renders EventsAggregateView', () => {
    render(<EventsAggregateView
        events={sampleData}
    />);
});

test('EventsAggregateViewTitle should equal to Summary', () => {
    const { getByTestId } = render(<EventsAggregateView events={sampleData} />);
    expect(getByTestId('EventsAggregateViewTitle')).toHaveTextContent('Summary');
});

it('should take a EventsAggregateView snapshot', () => {
    const { asFragment } = render(<EventsAggregateView
        events={sampleData}
    />);
    expect(asFragment()).toMatchSnapshot();
});
