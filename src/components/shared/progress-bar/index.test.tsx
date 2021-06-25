import React from 'react';

import { render } from '@testing-library/react';

import { ProgressBar } from '.';

test('renders ProgressBar', () => {
    render(<ProgressBar
        width={1100}
        percent={80}
        type="md"
    />);
});
