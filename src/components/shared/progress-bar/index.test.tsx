import React from 'react';

import { render } from '@testing-library/react';

import { ProgressBar } from '.';

test('renders ProgressBar', () => {
    render(<ProgressBar
        percent={80}
        type="md"
    />);
});
