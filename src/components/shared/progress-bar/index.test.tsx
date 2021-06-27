import React from 'react';

import { cleanup, render } from '@testing-library/react';

import { ProgressBar } from '.';

afterEach(cleanup);

test('renders ProgressBar', () => {
    render(<ProgressBar
        percent={0.8}
        type="md"
    />);
});

test('ProgressBar Percentage should equal to 70%', () => {
    const { getByTestId } = render(<ProgressBar
        percent={0.7}
        type="md"
    />);
    expect(getByTestId('ProgressBarPercentage')).toHaveTextContent('70%');
});

it('should take a ProgressBar snapshot', () => {
    const { asFragment } = render(<ProgressBar
        percent={80}
        type="md"
    />);
    expect(asFragment()).toMatchSnapshot();
});
